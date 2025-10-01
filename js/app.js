// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    console.log('Estudiantes disponibles:', window.estudiantes ? window.estudiantes.length : 0);
    
    // Verificar que los datos estén cargados
    if (!window.estudiantes) {
        console.error('Error: No se cargaron los datos de estudiantes');
        return;
    }
    
    // Inicializar la aplicación
    renderizarEstudiantes();
    inicializarEventos();
});

// Renderizar tabla de estudiantes
function renderizarEstudiantes() {
    const tbody = document.getElementById('students-tbody');
    
    if (!tbody) {
        console.error('No se encontró el elemento tbody');
        return;
    }
    
    if (!window.estudiantes || window.estudiantes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7">No hay estudiantes registrados</td></tr>';
        return;
    }
    
    tbody.innerHTML = window.estudiantes.map(estudiante => `
        <tr>
            <td>${estudiante.codigo}</td>
            <td>${estudiante.tipoId} ${estudiante.numeroId}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.grado}</td>
            <td>${estudiante.grupo}</td>
            <td>${estudiante.estado}</td>
            <td class="actions">
                <button type="button" class="action-btn" onclick="verEstudiante('${estudiante.codigo}')" aria-label="Ver detalles de ${estudiante.nombre}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
                <button type="button" class="action-btn" onclick="eliminarEstudiante('${estudiante.codigo}')" aria-label="Eliminar ${estudiante.nombre}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                </button>
            </td>
        </tr>
    `).join('');
    
    console.log('Tabla renderizada con', window.estudiantes.length, 'estudiantes');
}

// Ver detalles del estudiante
function verEstudiante(codigo) {
    const estudiante = window.estudiantes.find(e => e.codigo === codigo);
    if (!estudiante) {
        console.error('Estudiante no encontrado:', codigo);
        return;
    }

    // Ocultar lista y mostrar detalle
    document.getElementById('student-list').hidden = true;
    document.getElementById('student-detail').hidden = false;

    // Llenar formulario con datos del estudiante
    document.getElementById('student-code').value = estudiante.codigo;
    document.getElementById('student-id-type').value = estudiante.tipoId;
    document.getElementById('student-id-number').value = estudiante.numeroId;
    document.getElementById('student-first-name').value = estudiante.primerNombre;
    document.getElementById('student-second-name').value = estudiante.segundoNombre || '';
    document.getElementById('student-first-surname').value = estudiante.primerApellido;
    document.getElementById('student-second-surname').value = estudiante.segundoApellido || '';
    
    // Seleccionar género
    const radioGenero = document.querySelector(`input[name="gender"][value="${estudiante.genero}"]`);
    if (radioGenero) radioGenero.checked = true;
    
    document.getElementById('student-birthdate').value = estudiante.fechaNacimiento;
    document.getElementById('student-phone').value = estudiante.telefonoFijo || '';
    document.getElementById('student-mobile').value = estudiante.celular;
    document.getElementById('student-gmail').value = estudiante.gmail;
    document.getElementById('student-city').value = estudiante.ciudad;
    document.getElementById('student-address').value = estudiante.direccion;
    document.getElementById('student-grade').value = estudiante.grado;
    document.getElementById('student-group').value = estudiante.grupo;

    // Renderizar cursos
    const cursosTbody = document.getElementById('courses-tbody');
    if (estudiante.cursos && estudiante.cursos.length > 0) {
        cursosTbody.innerHTML = estudiante.cursos.map(curso => `
            <tr>
                <td>${curso.codigo}</td>
                <td>${curso.año}</td>
                <td>${curso.grado}</td>
                <td>${curso.grupo}</td>
                <td>${curso.estado}</td>
                <td>${curso.promedio || '-'}</td>
            </tr>
        `).join('');
    } else {
        cursosTbody.innerHTML = '<tr><td colspan="6">No hay cursos registrados</td></tr>';
    }

    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Eliminar estudiante
function eliminarEstudiante(codigo) {
    if (confirm('¿Está seguro de que desea eliminar este estudiante?')) {
        const index = window.estudiantes.findIndex(e => e.codigo === codigo);
        if (index !== -1) {
            window.estudiantes.splice(index, 1);
            renderizarEstudiantes();
            console.log('Estudiante eliminado');
        }
    }
}

// Inicializar eventos
function inicializarEventos() {
    // Volver a la lista de estudiantes
    const backToListBtn = document.getElementById('back-to-list');
    if (backToListBtn) {
        backToListBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('student-detail').hidden = true;
            document.getElementById('student-list').hidden = false;
            window.scrollTo(0, 0);
        });
    }

    // Evento para formulario de búsqueda
    const searchForm = document.querySelector('form[role="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Buscando...');
            // Aquí puedes implementar la lógica de filtrado
        });
    }

    // Evento para limpiar filtros
    const resetBtn = document.querySelector('button[type="reset"]');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            renderizarEstudiantes();
        });
    }

    // Botón nuevo estudiante
    const btnNewStudent = document.getElementById('btn-new-student');
    if (btnNewStudent) {
        btnNewStudent.addEventListener('click', function() {
            // Mostrar formulario vacío para nuevo estudiante
            document.getElementById('student-list').hidden = true;
            document.getElementById('student-detail').hidden = false;
            document.getElementById('student-form').reset();
            document.getElementById('student-code').value = 'Nuevo';
            window.scrollTo(0, 0);
        });
    }
}