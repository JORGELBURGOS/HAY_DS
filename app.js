// Datos de evaluación (actualizados con Perfil Corto)
const evaluationData = {
    knowHow: {
        technical: {
            A: [38, 43, 50, 50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152],
            B: [50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200],
            C: [66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264],
            D: [87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350],
            E: [115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460],
            F: [152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608],
            G: [200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800],
            H: [264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800, 800, 920, 1056]
        },
        communication: {
            1: 0,
            2: 1,
            3: 2
        },
        integration: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4
        }
    },
    
    problemSolving: {
        complexity: {
            1: [0.1, 0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76],
            2: [0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87],
            3: [0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0],
            4: [0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15],
            5: [0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15, 1.32]
        },
        thinkingFreedom: {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7
        }
    },
    
    responsibility: {
        freedom: {
            A: [8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57],
            B: [12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87],
            C: [19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132],
            D: [29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200],
            E: [43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304],
            F: [66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460],
            G: [100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700],
            H: [152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056]
        },
        impactNature: {
            R: 0,
            C: 1,
            S: 2,
            P: 3
        },
        magnitude: {
            N: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4
        }
    },
    
    jobLevels: [
        { 
            min: 0, 
            max: 50, 
            level: "Nivel 1 - Operativo", 
            description: "Puestos operativos básicos con tareas rutinarias y supervisión directa. Requieren conocimientos elementales y habilidades específicas limitadas."
        },
        { 
            min: 51, 
            max: 115, 
            level: "Nivel 2 - Técnico", 
            description: "Puestos técnicos o especializados que requieren conocimientos específicos. Trabajo bajo supervisión general con cierta autonomía en tareas técnicas."
        },
        { 
            min: 116, 
            max: 200, 
            level: "Nivel 3 - Profesional", 
            description: "Puestos profesionales o de supervisión que requieren conocimientos avanzados y capacidad para resolver problemas complejos. Pueden supervisar a otros."
        },
        { 
            min: 201, 
            max: 350, 
            level: "Nivel 4 - Gerencia Media", 
            description: "Puestos de gerencia media con responsabilidad sobre departamentos o áreas funcionales. Requieren capacidad de liderazgo y toma de decisiones estratégicas."
        },
        { 
            min: 351, 
            max: 528, 
            level: "Nivel 5 - Alta Gerencia", 
            description: "Puestos de alta gerencia con responsabilidad sobre múltiples áreas o funciones. Toma de decisiones que afectan a toda la organización."
        },
        { 
            min: 529, 
            max: 800, 
            level: "Nivel 6 - Directivo", 
            description: "Puestos directivos con responsabilidad estratégica global. Establecen políticas y objetivos organizacionales a largo plazo."
        },
        { 
            min: 801, 
            max: 1400, 
            level: "Nivel 7 - Alta Dirección", 
            description: "Puestos de alta dirección (CEO, Presidentes) con responsabilidad total sobre la organización. Toman decisiones que definen el rumbo estratégico y visión de la empresa."
        }
    ],

    // Nuevo: Datos de Perfil Corto
    profiles: {
        P4: { 
            range: "PS > AC", 
            description: "Perfil orientado a resolver problemas complejos con alto nivel de autonomía." 
        },
        P3: { 
            range: "PS > AC", 
            description: "Perfil con fuerte capacidad analítica para problemas no rutinarios." 
        },
        P2: { 
            range: "PS > AC", 
            description: "Perfil equilibrado con enfoque en solución de problemas medianamente complejos." 
        },
        P1: { 
            range: "PS > AC", 
            description: "Perfil técnico con capacidad para resolver problemas dentro de su especialidad." 
        },
        LEVEL: { 
            range: "PS = AC", 
            description: "Perfil equilibrado entre conocimientos técnicos y capacidad de resolución de problemas." 
        },
        A1: { 
            range: "PS < AC", 
            description: "Perfil técnico básico con tareas principalmente operativas." 
        },
        A2: { 
            range: "PS < AC", 
            description: "Perfil técnico especializado en áreas específicas." 
        },
        A3: { 
            range: "PS < AC", 
            description: "Perfil técnico avanzado con conocimiento profundo." 
        },
        A4: { 
            range: "PS < AC", 
            description: "Perfil experto con dominio técnico en su campo." 
        }
    }
};

// Variables globales
window.currentEvaluation = null;
window.evaluationCharts = {
    levelDistribution: null,
    scoreDistribution: null
};

// Función para determinar el Perfil Corto (nueva)
function determineProfile(knowHowScore, problemSolvingScore) {
    const ratio = problemSolvingScore / knowHowScore;
    
    if (ratio > 1.2) {
        if (knowHowScore <= 50) return evaluationData.profiles.P4;
        if (knowHowScore <= 115) return evaluationData.profiles.P3;
        if (knowHowScore <= 200) return evaluationData.profiles.P2;
        return evaluationData.profiles.P1;
    } else if (ratio < 0.8) {
        if (knowHowScore <= 50) return evaluationData.profiles.A1;
        if (knowHowScore <= 115) return evaluationData.profiles.A2;
        if (knowHowScore <= 200) return evaluationData.profiles.A3;
        return evaluationData.profiles.A4;
    } else {
        return evaluationData.profiles.LEVEL;
    }
}

// Función principal de evaluación (modificada para incluir Perfil Corto)
function evaluateJob() {
    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    const profile = determineProfile(knowHowScore, problemSolvingScore); // Nuevo

    // Mostrar resultados
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = document.getElementById('jobTitle').value;
    document.getElementById('profileType').textContent = `${profile.range} (${Object.keys(evaluationData.profiles).find(key => evaluationData.profiles[key] === profile)})`; // Nuevo
    document.getElementById('profileDescription').textContent = profile.description; // Nuevo

    // Animaciones
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    document.getElementById('knowHowScore').textContent = `${knowHowScore} pts`;
    document.getElementById('problemSolvingScore').textContent = `${problemSolvingScore} pts`;
    document.getElementById('responsibilityScore').textContent = `${responsibilityScore} pts`;
    
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });
    
    // Guardar en memoria para posible exportación/guardado
    window.currentEvaluation = {
        jobTitle: document.getElementById('jobTitle').value,
        jobDescription: document.getElementById('jobDescription').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        evaluationDate: new Date().toISOString(),
        scores: {
            knowHow: knowHowScore,
            problemSolving: problemSolvingScore,
            responsibility: responsibilityScore,
            total: totalScore
        },
        level: jobLevel,
        profile: profile // Nuevo
    };
    
    goToSection('results-section');
}

// Función para generar PDF (actualizada para incluir Perfil Corto)
function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.setTextColor(67, 97, 238);
    doc.text('Evaluación de Puesto', 105, 20, { align: 'center' });
    
    // Información básica
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${window.currentEvaluation.jobTitle}`, 20, 40);
    doc.text(`Fecha de evaluación: ${new Date(window.currentEvaluation.evaluationDate).toLocaleDateString()}`, 20, 50);
    
    // Descripción del puesto
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Puesto:', 20, 70);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descriptionLines = doc.splitTextToSize(window.currentEvaluation.jobDescription || 'No especificado', 170);
    doc.text(descriptionLines, 20, 80);
    
    // Responsabilidades
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Responsabilidades Principales:', 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 20 : 110);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const responsibilitiesLines = doc.splitTextToSize(window.currentEvaluation.jobResponsibilities || 'No especificado', 170);
    doc.text(responsibilitiesLines, 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 30 : 120);
    
    // Resultados
    doc.setFontSize(16);
    doc.setTextColor(67, 97, 238);
    doc.text('Resultados de Evaluación', 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 50 : 150);
    
    // Tabla de puntajes
    doc.autoTable({
        startY: doc.previousAutoTable ? doc.previousAutoTable.finalY + 60 : 160,
        head: [['Componente', 'Puntaje']],
        body: [
            ['Know-How', window.currentEvaluation.scores.knowHow],
            ['Solución de Problemas', window.currentEvaluation.scores.problemSolving],
            ['Responsabilidad', window.currentEvaluation.scores.responsibility],
            ['TOTAL', window.currentEvaluation.scores.total]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [67, 97, 238],
            textColor: [255, 255, 255]
        }
    });
    
    // Perfil Corto (nuevo)
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Perfil Corto:', 20, doc.lastAutoTable.finalY + 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Tipo: ${window.currentEvaluation.profile.range}`, 20, doc.lastAutoTable.finalY + 30);
    const profileLines = doc.splitTextToSize(window.currentEvaluation.profile.description, 170);
    doc.text(profileLines, 20, doc.lastAutoTable.finalY + 40);
    
    // Descripción del nivel
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Nivel:', 20, doc.lastAutoTable.finalY + 60);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const levelLines = doc.splitTextToSize(window.currentEvaluation.level.description, 170);
    doc.text(levelLines, 20, doc.lastAutoTable.finalY + 70);
    
    // Guardar el PDF
    doc.save(`Evaluacion_${window.currentEvaluation.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

// Resto del código (sin cambios)
// ... (las funciones showNotification, goToSection, calculateKnowHowScore, etc. se mantienen igual)
// Solo asegúrate de que todas las funciones originales estén presentes.

// Event Listeners (sin cambios)
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar preloader
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    // Navegación principal
    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationContent');
    });
    
    document.getElementById('evaluationsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationsContent');
    });
    
    document.getElementById('reportsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('reportsContent');
    });
    
    document.getElementById('settingsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settingsContent');
    });
    
    // Navegación entre pasos
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToSection(`${stepNumber}-section`);
        });
    });
    
    // Botones de navegación
    document.getElementById('nextToKnowHow')?.addEventListener('click', () => goToSection('knowhow-section'));
    document.getElementById('backToDescription')?.addEventListener('click', () => goToSection('description-section'));
    document.getElementById('nextToProblemSolving')?.addEventListener('click', () => goToSection('problem-solving-section'));
    document.getElementById('backToKnowHow')?.addEventListener('click', () => goToSection('knowhow-section'));
    document.getElementById('nextToResponsibility')?.addEventListener('click', () => goToSection('responsibility-section'));
    document.getElementById('backToProblemSolving')?.addEventListener('click', () => goToSection('problem-solving-section'));
    
    // Botón de evaluación
    document.getElementById('evaluateBtn')?.addEventListener('click', evaluateJob);
    
    // Botón de guardar
    document.getElementById('saveBtn')?.addEventListener('click', () => {
        if (window.currentEvaluation) {
            showSaveOptionsDialog();
        } else {
            showNotification('No hay evaluación para guardar', 'error');
        }
    });
    
    // Botón de exportar
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        if (window.currentEvaluation) {
            exportEvaluation(window.currentEvaluation, 'json');
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });
    
    // Botón de nueva evaluación
    document.getElementById('newEvalBtn')?.addEventListener('click', resetEvaluation);
    
    // Botón de nueva evaluación desde el header
    document.getElementById('newEvaluationBtn')?.addEventListener('click', resetEvaluation);
    
    // Botón para generar PDF
    document.getElementById('generatePdfBtn')?.addEventListener('click', generatePDF);
    
    // Configuración inicial
    showContent('evaluationContent');
    goToSection('description-section');
});