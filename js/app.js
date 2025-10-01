// Estado
const appState = {
    currentView: 'list',
    currentStudent: null,
    filteredStudents: [...estudiantes],
    currentPage: 1,
    itemsPerPage: 4,
    coursesPerPage: 4
};

//DOM
const elements = {
    studentListView: document.getElementById('studentListView'),
    studentDetailView: document.getElementById('studentDetailView'),
    studentsTableBody: document.getElementById('studentsTableBody'),
    coursesTableBody: document.getElementById('coursesTableBody'),
    filtersForm: document.getElementById('filtersForm'),
    btnClearFilters: document.getElementById('btnClearFilters'),
    breadcrumbCurrent: document.getElementById('breadcrumbCurrent'),
    resultsPerPage: document.getElementById('resultsPerPage'),
    coursesPerPage: document.getElementById('coursesPerPage')
};

function init() {
    renderStudentList();
    attachEventListeners();
}

// Adjuntar eventos
function attachEventListeners() {
    // Filtros
    elements.filtersForm.addEventListener('submit', handleFilterSubmit);
    elements.btnClearFilters.addEventListener('click', handleClearFilters);
    
    // Paginación
    elements.resultsPerPage.addEventListener('change', handleResultsPerPageChange);
    
    // Navegación del sidebar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

// Manejar click en navegación
function handleNavClick(e) {
    e.preventDefault();
    
    // Remover clase active de todos los links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Agregar clase active al link clickeado
    e.target.classList.add('active');
}

// Renderizar lista de estudiantes
function renderStudentList() {
    const tbody = elements.studentsTableBody;
    tbody.innerHTML = '';
    
    const start = (appState.currentPage - 1) * appState.itemsPerPage;
    const end = start + appState.itemsPerPage;
    const paginatedStudents = appState.filteredStudents.slice(start, end);
    
    if (paginatedStudents.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No se encontraron estudiantes</td></tr>';
        return;
    }
    
    paginatedStudents.forEach(student => {
        const row = createStudentRow(student);
        tbody.appendChild(row);
    });
    
    updatePaginationInfo();
}

// Crear fila de estudiante
function createStudentRow(student) {
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${student.codigo}</td>
        <td>${student.tipoId} ${student.numeroDocumento}</td>
        <td>${student.nombreCompleto}</td>
        <td>${student.grado}</td>
        <td>${student.grupo}</td>
        <td>${student.estado}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-icon btn-view" data-codigo="${student.codigo}" aria-label="Ver información del estudiante">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4C5 4 1.73 7.11 1 10c.73 2.89 4 6 9 6s8.27-3.11 9-6c-.73-2.89-4-6-9-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="btn-icon btn-delete" data-codigo="${student.codigo}" aria-label="Eliminar estudiante">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2h8v2H6V2zm9 2H5c-.55 0-1 .45-1 1v1h12V5c0-.55-.45-1-1-1zm-1 3H6v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </td>
    `;
    
    // Agregar eventos a los botones
    const btnView = row.querySelector('.btn-view');
    const btnDelete = row.querySelector('.btn-delete');
    
    btnView.addEventListener('click', () => showStudentDetail(student.codigo));
    btnDelete.addEventListener('click', () => deleteStudent(student.codigo));
    
    return row;
}

// Mostrar detalle del estudiante
function showStudentDetail(codigo) {
    const student = estudiantes.find(s => s.codigo === codigo);
    
    if (!student) {
        console.error('Estudiante no encontrado');
        return;
    }
    
    appState.currentStudent = student;
    appState.currentView = 'detail';
    
    // Ocultar vista de lista y mostrar vista de detalle
    elements.studentListView.classList.add('hidden');
    elements.studentDetailView.classList.remove('hidden');
    
    // Actualizar breadcrumb
    elements.breadcrumbCurrent.textContent = student.nombreCompleto;
    
    // Llenar formulario con datos del estudiante
    fillStudentForm(student);
    
    // Renderizar cursos
    renderCoursesList(student.cursos);
}

// Llenar formulario con datos del estudiante
function fillStudentForm(student) {
    document.getElementById('codigo').value = student.codigo;
    document.getElementById('tipoIdentificacion').value = student.tipoId;
    document.getElementById('numeroDocumento').value = student.numeroDocumento;
    document.getElementById('primerNombre').value = student.primerNombre;
    document.getElementById('segundoNombre').value = student.segundoNombre;
    document.getElementById('primerApellido').value = student.primerApellido;
    document.getElementById('segundoApellido').value = student.segundoApellido;
    
    // Seleccionar sexo
    const radioSexo = document.querySelector(`input[name="sexo"][value="${student.sexo}"]`);
    if (radioSexo) {
        radioSexo.checked = true;
    }
    
    document.getElementById('fechaNacimiento').value = student.fechaNacimiento;
    document.getElementById('telefonoResidencia').value = student.telefonoResidencia;
    document.getElementById('celular').value = student.celular;
    document.getElementById('correo').value = student.correo;
    document.getElementById('ciudadResidencia').value = student.ciudadResidencia;
    document.getElementById('direccion').value = student.direccion;
    document.getElementById('grado').value = student.grado;
    document.getElementById('grupo').value = student.grupo;
}

// Renderizar lista de cursos
function renderCoursesList(cursos) {
    const tbody = elements.coursesTableBody;
    tbody.innerHTML = '';
    
    if (!cursos || cursos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No hay cursos registrados</td></tr>';
        return;
    }
    
    cursos.forEach(curso => {
        const row = createCourseRow(curso);
        tbody.appendChild(row);
    });
}

// Crear fila de curso
function createCourseRow(curso) {
    const row = document.createElement('tr');
    
    const notaDisplay = curso.notaPromedio !== null ? curso.notaPromedio : '';
    const estadoDisplay = curso.estado;
    const estadoSelect = curso.estado === 'En curso' 
        ? `<select class="estado-select">
            <option value="En curso" selected>En curso</option>
            <option value="Aprobado">Aprobado</option>
            <option value="Reprobado">Reprobado</option>
           </select>`
        : estadoDisplay;
    
    row.innerHTML = `
        <td>${curso.codigo}</td>
        <td>${curso.año}</td>
        <td>${curso.grado}</td>
        <td>${curso.grupo}</td>
        <td>${estadoSelect}</td>
        <td>${notaDisplay}</td>
    `;
    
    return row;
}

// Eliminar estudiante
function deleteStudent(codigo) {
    const confirmDelete = confirm('¿Está seguro que desea eliminar este estudiante?');
    
    if (confirmDelete) {
        // Encontrar índice del estudiante en el array original
        const index = estudiantes.findIndex(s => s.codigo === codigo);
        
        if (index !== -1) {
            // Eliminar del array
            estudiantes.splice(index, 1);
            
            // Actualizar lista filtrada
            applyFilters();
            
            // Re-renderizar
            renderStudentList();
            
            alert('Estudiante eliminado correctamente');
        }
    }
}

// Manejar envío de filtros
function handleFilterSubmit(e) {
    e.preventDefault();
    applyFilters();
    appState.currentPage = 1;
    renderStudentList();
}

// Aplicar filtros
function applyFilters() {
    const formData = new FormData(elements.filtersForm);
    
    const filters = {
        grado: formData.get('grado'),
        grupo: formData.get('grupo'),
        tipoId: formData.get('tipoId'),
        numeroDoc: formData.get('numeroDoc'),
        estudiante: formData.get('estudiante')
    };
    
    appState.filteredStudents = estudiantes.filter(student => {
        if (filters.grado && student.grado !== filters.grado) return false;
        if (filters.grupo && student.grupo !== filters.grupo) return false;
        if (filters.tipoId && student.tipoId !== filters.tipoId) return false;
        if (filters.numeroDoc && !student.numeroDocumento.includes(filters.numeroDoc)) return false;
        if (filters.estudiante && student.codigo !== filters.estudiante) return false;
        
        return true;
    });
}

// Limpiar filtros
function handleClearFilters() {
    elements.filtersForm.reset();
    appState.filteredStudents = [...estudiantes];
    appState.currentPage = 1;
    renderStudentList();
}

// Cambiar cantidad de resultados por página
function handleResultsPerPageChange(e) {
    appState.itemsPerPage = parseInt(e.target.value);
    appState.currentPage = 1;
    renderStudentList();
}

// Actualizar información de paginación
function updatePaginationInfo() {
    const total = appState.filteredStudents.length;
    const start = (appState.currentPage - 1) * appState.itemsPerPage + 1;
    const end = Math.min(start + appState.itemsPerPage - 1, total);
    
    const paginationInfo = document.getElementById('paginationInfo');
    if (paginationInfo) {
        paginationInfo.textContent = `${start} al ${end} de ${total} registros`;
    }
}

// Volver a la lista desde el detalle
function goBackToList() {
    appState.currentView = 'list';
    appState.currentStudent = null;
    
    elements.studentDetailView.classList.add('hidden');
    elements.studentListView.classList.remove('hidden');
    
    elements.breadcrumbCurrent.textContent = 'Estudiante';
}

// Agregar evento al breadcrumb para volver
const breadcrumbLink = document.querySelector('.breadcrumb-link');
if (breadcrumbLink) {
    breadcrumbLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (appState.currentView === 'detail') {
            goBackToList();
        }
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}