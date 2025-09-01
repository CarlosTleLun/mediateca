const horarios = {
    frances: {
        asesores: {
            Lunes: {
                "7:00-7:50": "-",
                "8:40-9:30": "-",
                "9:30-10:20": "-",
                "10:20-11:10": "-",
                "11:10-12:00": "Andrés",
                "12:00-12:50": "-",
                "12:50-13:40": "Andrés",
                "13:40-14:30": "-",
                "14:30-15:20": "Andrés",
                "16:10-17:00": "-",
                "19:30-20:20": "-",
            },
            Martes: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:00-17:50": "Catalina",
            },
            Miércoles: {
                "7:50-8:40": "Andrés",
                "11:10-12:00": "Andrés",
                "14:30-15:20": "Catalina/Andrés",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Jueves: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:50-18:40": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Viernes: {},
        },
    },
    italiano: {
        asesores: {
            Lunes: {
                "7:00-7:50": "-",
                "8:40-9:30": "-",
                "9:30-10:20": "-",
                "10:20-11:10": "-",
                "11:10-12:00": "_",
                "12:00-12:50": "-",
                "12:50-13:40": "-",
                "13:40-14:30": "-",
                "14:30-15:20": "Viridiana",
                "16:10-17:00": "-",
                "19:30-20:20": "-",
            },
            Martes: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:00-17:50": "Catalina",
            },
            Miércoles: {
                "7:50-8:40": "Andrés",
                "11:10-12:00": "Andrés",
                "14:30-15:20": "Catalina/Andrés",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Jueves: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:50-18:40": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Viernes: {},
        },
    },
    aleman: {
        asesores: {
            Lunes: {
                "7:00-7:50": "-",
                "8:40-9:30": "-",
                "9:30-10:20": "-",
                "10:20-11:10": "-",
                "11:10-12:00": "_",
                "12:00-12:50": "-",
                "12:50-13:40": "-",
                "13:40-14:30": "-",
                "14:30-15:20": "Viridiana",
                "16:10-17:00": "-",
                "19:30-20:20": "-",
            },
            Martes: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:00-17:50": "Catalina",
            },
            Miércoles: {
                "7:50-8:40": "Andrés",
                "11:10-12:00": "Andrés",
                "14:30-15:20": "Catalina/Andrés",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Jueves: {
                "14:30-15:20": "Catalina",
                "15:20-16:10": "Catalina",
                "16:10-17:00": "Catalina",
                "17:50-18:40": "Catalina",
                "18:40-19:30": "Catalina",
            },
            Viernes: {},
        },
    },
    ingles: {
        asesores: {
            Lunes: {
                "7:00-7:50": "-",
                "7:50-8:40": "-",
                "8:40-9:30": "-",
                "9:30-10:20": "Horacio",
                "12:50-13:40": "-",
                "13:40-14:30": "-",
                "15:20-16:10": "Nohemí",
                "16:10-17:00": "Nohemí",
                "17:00-17:50": "Nohemí",
                "19:30-20:20": "-",
            },
            Martes: {
                "9:30-10:20": "Horacio",
                "10:20-11:10": "Horacio",
                "11:10-12:00": "Sandra",
                "12:00-12:50": "Sandra",
                "16:10-17:00": "Nora",
                "17:00-17:50": "Nora",
                "17:50-18:40": "Nora",
            },
            Miércoles: {
                "8:40-9:30": "Horacio",
                "15:20-16:10": "Nohemí",
                "16:10-17:00": "Nohemí",
                "17:00-17:50": "Nohemí/Daniel",
                "17:50-18:40": "Daniel",
                "18:40-19:30": "Daniel",
            },
            Jueves: {
                "9:30-10:20": "Horacio",
                "10:20-11:10": "Horacio",

                "14:30-15:20": "Daniel",
                "15:20-16:10": "Daniel",
                "16:10-17:00": "Daniel",
            },
            Viernes: {
                "9:30-10:20": "Horacio",
                "11:10-12:00": "Horacio",
                "14:30-15:20": "Nohemí",
                "15:20-16:10": "Nohemí",
                "17:00-17:50": "Daniel",
            },
        },
    },
};

function cargarHorarios() {
    const idioma = document.getElementById("idioma").value;
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const tablaDiv = document.getElementById("tabla-horarios");
    const horariosIdioma = horarios[idioma].asesores;

    // Recolectar todas las horas de todos los días
    const todasHoras = new Set();
    dias.forEach((dia) => {
        const horas = horariosIdioma[dia];
        if (horas) {
            Object.keys(horas).forEach((hora) => todasHoras.add(hora));
        }
    });

    // Ordenar las horas por hora de inicio
    const horasOrdenadas = Array.from(todasHoras).sort((a, b) => {
        const extraerMinutos = (horaStr) => {
            const horaInicio = horaStr.split("-")[0].trim();
            const [h, m] = horaInicio.split(":").map(Number);
            return h * 60 + m;
        };
        return extraerMinutos(a) - extraerMinutos(b);
    });

    // Construir tabla HTML
    let html = "<table><thead><tr><th class='columna-hora'>Hora</th>";
    dias.forEach((dia) => {
        html += `<th class='encabezado-dia'>${dia}</th>`;
    });
    html += "</tr></thead><tbody>";

    horasOrdenadas.forEach((hora) => {
        html += `<tr><td class="columna-hora">${hora}</td>`;
        dias.forEach((dia) => {
            const nombre = horariosIdioma[dia] ? .[hora];
            html += `<td>${nombre ? nombre : "-"}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    tablaDiv.innerHTML = html;

    // Cambiar clase del encabezado según idioma
    const thead = tablaDiv.querySelector("table thead");
    thead.classList.remove(
        "encabezado-frances",
        "encabezado-ingles",
        "encabezado-italiano",
        "encabezado-aleman"
    );

    if (idioma === "frances") {
        thead.classList.add("encabezado-frances");
    } else if (idioma === "italiano") {
        thead.classList.add("encabezado-italiano");
    } else if (idioma === "aleman") {
        thead.classList.add("encabezado-aleman");
    } else if (idioma === "ingles") {
        thead.classList.add("encabezado-ingles");
    }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarHorarios);