// ==========================================
// data.js - Datos de estudiantes
// Este archivo contiene todos los datos de los estudiantes
// en formato JavaScript (simulando un JSON)
// ==========================================

const estudiantes = [
    {
        codigo: '2022101',
        tipoId: 'TI',
        numeroDocumento: '1108812345',
        primerNombre: 'Camila',
        segundoNombre: '',
        primerApellido: 'Fernández',
        segundoApellido: 'Rojas',
        nombreCompleto: 'Camila Fernández Rojas',
        sexo: 'femenino',
        fechaNacimiento: '2007-03-15',
        telefonoResidencia: '6045551234',
        celular: '3001234567',
        correo: 'camila.fernandez@correo.com',
        ciudadResidencia: 'medellin',
        direccion: 'Carrera 45 #23-67 Apt 301',
        grado: '10',
        grupo: 'A',
        estado: 'En curso',
        cursos: [
            { 
                codigo: '2022101', 
                año: 2022, 
                grado: 10, 
                grupo: 'A', 
                estado: 'En curso', 
                notaPromedio: null 
            },
            { 
                codigo: '2021101', 
                año: 2021, 
                grado: 9, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 4.2 
            },
            { 
                codigo: '2020101', 
                año: 2020, 
                grado: 8, 
                grupo: 'B', 
                estado: 'Aprobado', 
                notaPromedio: 4.5 
            }
        ]
    },
    {
        codigo: '2022102',
        tipoId: 'TI',
        numeroDocumento: '1108812349',
        primerNombre: 'Juan',
        segundoNombre: 'Felipe',
        primerApellido: 'Montoya',
        segundoApellido: 'Ríos',
        nombreCompleto: 'Juan Felipe Montoya Ríos',
        sexo: 'masculino',
        fechaNacimiento: '2007-08-22',
        telefonoResidencia: '6045552345',
        celular: '3002345678',
        correo: 'juan.montoya@correo.com',
        ciudadResidencia: 'medellin',
        direccion: 'Calle 34 #12-89',
        grado: '10',
        grupo: 'A',
        estado: 'Aprobado',
        cursos: [
            { 
                codigo: '2022102', 
                año: 2022, 
                grado: 10, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 4.3 
            },
            { 
                codigo: '2021102', 
                año: 2021, 
                grado: 9, 
                grupo: 'B', 
                estado: 'Aprobado', 
                notaPromedio: 4.0 
            }
        ]
    },
    {
        codigo: '2022103',
        tipoId: 'CC',
        numeroDocumento: '1089456789',
        primerNombre: 'Luisa',
        segundoNombre: 'María',
        primerApellido: 'Cruz',
        segundoApellido: 'Hernández',
        nombreCompleto: 'Luisa María Cruz Hernández',
        sexo: 'femenino',
        fechaNacimiento: '2007-11-05',
        telefonoResidencia: '',
        celular: '3103456789',
        correo: 'luisa.cruz@correo.com',
        ciudadResidencia: 'bogota',
        direccion: 'Transversal 23 #45-12',
        grado: '10',
        grupo: 'B',
        estado: 'Reprobado',
        cursos: [
            { 
                codigo: '2022103', 
                año: 2022, 
                grado: 10, 
                grupo: 'B', 
                estado: 'Reprobado', 
                notaPromedio: 2.8 
            },
            { 
                codigo: '2021103', 
                año: 2021, 
                grado: 9, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 3.5 
            }
        ]
    },
    {
        codigo: '2022104',
        tipoId: 'TI',
        numeroDocumento: '1108812009',
        primerNombre: 'Ana',
        segundoNombre: 'María',
        primerApellido: 'Bedoya',
        segundoApellido: 'López',
        nombreCompleto: 'Ana María Bedoya López',
        sexo: 'femenino',
        fechaNacimiento: '2007-05-18',
        telefonoResidencia: '6045553456',
        celular: '3004567890',
        correo: 'ana.bedoya@correo.com',
        ciudadResidencia: 'medellin',
        direccion: 'Avenida 80 #56-23 Casa 5',
        grado: '10',
        grupo: 'B',
        estado: 'En curso',
        cursos: [
            { 
                codigo: '2022104', 
                año: 2022, 
                grado: 10, 
                grupo: 'B', 
                estado: 'En curso', 
                notaPromedio: null 
            },
            { 
                codigo: '2021104', 
                año: 2021, 
                grado: 9, 
                grupo: 'C', 
                estado: 'Aprobado', 
                notaPromedio: 4.6 
            }
        ]
    },
    {
        codigo: '2022105',
        tipoId: 'TI',
        numeroDocumento: '1108701349',
        primerNombre: 'Santiago',
        segundoNombre: '',
        primerApellido: 'Sánchez',
        segundoApellido: 'Rivera',
        nombreCompleto: 'Santiago Sánchez Rivera',
        sexo: 'masculino',
        fechaNacimiento: '2007-09-30',
        telefonoResidencia: '6045554567',
        celular: '3115678901',
        correo: 'santiago.sanchez@correo.com',
        ciudadResidencia: 'cali',
        direccion: 'Carrera 100 #15-45',
        grado: '10',
        grupo: 'A',
        estado: 'En curso',
        cursos: [
            { 
                codigo: '2022105', 
                año: 2022, 
                grado: 10, 
                grupo: 'A', 
                estado: 'En curso', 
                notaPromedio: null 
            },
            { 
                codigo: '2021105', 
                año: 2021, 
                grado: 9, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 3.9 
            }
        ]
    },
    {
        codigo: '2021102',
        tipoId: 'TI',
        numeroDocumento: '1108812398',
        primerNombre: 'María',
        segundoNombre: 'José',
        primerApellido: 'González',
        segundoApellido: 'Pérez',
        nombreCompleto: 'María José González Pérez',
        sexo: 'femenino',
        fechaNacimiento: '2006-04-12',
        telefonoResidencia: '6045555678',
        celular: '3126789012',
        correo: 'maria.gonzalez@correo.com',
        ciudadResidencia: 'medellin',
        direccion: 'Calle 52 #23-15',
        grado: '9',
        grupo: 'C',
        estado: 'Aprobado',
        cursos: [
            { 
                codigo: '2021102', 
                año: 2021, 
                grado: 9, 
                grupo: 'C', 
                estado: 'Aprobado', 
                notaPromedio: 4.0 
            },
            { 
                codigo: '2020102', 
                año: 2020, 
                grado: 8, 
                grupo: 'B', 
                estado: 'Aprobado', 
                notaPromedio: 4.1 
            }
        ]
    },
    {
        codigo: '2020103',
        tipoId: 'CC',
        numeroDocumento: '1089567890',
        primerNombre: 'Carlos',
        segundoNombre: 'Andrés',
        primerApellido: 'Ramírez',
        segundoApellido: 'Torres',
        nombreCompleto: 'Carlos Andrés Ramírez Torres',
        sexo: 'masculino',
        fechaNacimiento: '2005-12-08',
        telefonoResidencia: '',
        celular: '3137890123',
        correo: 'carlos.ramirez@correo.com',
        ciudadResidencia: 'bogota',
        direccion: 'Diagonal 45 #78-90',
        grado: '9',
        grupo: 'B',
        estado: 'Reprobado',
        cursos: [
            { 
                codigo: '2020103', 
                año: 2020, 
                grado: 9, 
                grupo: 'B', 
                estado: 'Reprobado', 
                notaPromedio: 2.4 
            },
            { 
                codigo: '2019103', 
                año: 2019, 
                grado: 8, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 3.2 
            }
        ]
    },
    {
        codigo: '2022106',
        tipoId: 'TI',
        numeroDocumento: '1108899001',
        primerNombre: 'Andrea',
        segundoNombre: 'Carolina',
        primerApellido: 'Vargas',
        segundoApellido: 'Salazar',
        nombreCompleto: 'Andrea Carolina Vargas Salazar',
        sexo: 'femenino',
        fechaNacimiento: '2007-07-14',
        telefonoResidencia: '6045556789',
        celular: '3148901234',
        correo: 'andrea.vargas@correo.com',
        ciudadResidencia: 'medellin',
        direccion: 'Carrera 70 #34-21',
        grado: '10',
        grupo: 'C',
        estado: 'En curso',
        cursos: [
            { 
                codigo: '2022106', 
                año: 2022, 
                grado: 10, 
                grupo: 'C', 
                estado: 'En curso', 
                notaPromedio: null 
            },
            { 
                codigo: '2021106', 
                año: 2021, 
                grado: 9, 
                grupo: 'B', 
                estado: 'Aprobado', 
                notaPromedio: 4.4 
            }
        ]
    },
    {
        codigo: '2022107',
        tipoId: 'TI',
        numeroDocumento: '1108899002',
        primerNombre: 'Diego',
        segundoNombre: 'Alejandro',
        primerApellido: 'Mejía',
        segundoApellido: 'Castro',
        nombreCompleto: 'Diego Alejandro Mejía Castro',
        sexo: 'masculino',
        fechaNacimiento: '2007-10-20',
        telefonoResidencia: '',
        celular: '3159012345',
        correo: 'diego.mejia@correo.com',
        ciudadResidencia: 'cali',
        direccion: 'Calle 15 #89-45',
        grado: '10',
        grupo: 'B',
        estado: 'Aprobado',
        cursos: [
            { 
                codigo: '2022107', 
                año: 2022, 
                grado: 10, 
                grupo: 'B', 
                estado: 'Aprobado', 
                notaPromedio: 3.8 
            },
            { 
                codigo: '2021107', 
                año: 2021, 
                grado: 9, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 3.9 
            }
        ]
    },
    {
        codigo: '2022108',
        tipoId: 'CC',
        numeroDocumento: '1089678901',
        primerNombre: 'Valentina',
        segundoNombre: '',
        primerApellido: 'Ospina',
        segundoApellido: 'Morales',
        nombreCompleto: 'Valentina Ospina Morales',
        sexo: 'femenino',
        fechaNacimiento: '2007-02-28',
        telefonoResidencia: '6045557890',
        celular: '3160123456',
        correo: 'valentina.ospina@correo.com',
        ciudadResidencia: 'bogota',
        direccion: 'Transversal 45 #12-34',
        grado: '10',
        grupo: 'A',
        estado: 'En curso',
        cursos: [
            { 
                codigo: '2022108', 
                año: 2022, 
                grado: 10, 
                grupo: 'A', 
                estado: 'En curso', 
                notaPromedio: null 
            },
            { 
                codigo: '2021108', 
                año: 2021, 
                grado: 9, 
                grupo: 'C', 
                estado: 'Aprobado', 
                notaPromedio: 4.7 
            },
            { 
                codigo: '2020108', 
                año: 2020, 
                grado: 8, 
                grupo: 'A', 
                estado: 'Aprobado', 
                notaPromedio: 4.8 
            }
        ]
    }
];

// Exportar para uso en otros archivos (opcional - para compatibilidad con módulos)
// Si usas módulos ES6, descomenta la siguiente línea:
// export default estudiantes;