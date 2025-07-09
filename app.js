// Datos de evaluación basados en las tablas del Excel
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
        { min: 0, max: 50, level: "Nivel 1", description: "Puestos operativos básicos" },
        { min: 51, max: 115, level: "Nivel 2", description: "Puestos técnicos o especializados" },
        { min: 116, max: 200, level: "Nivel 3", description: "Puestos profesionales o de supervisión" },
        { min: 201, max: 350, level: "Nivel 4", description: "Puestos de gerencia media" },
        { min: 351, max: 528, level: "Nivel 5", description: "Puestos de alta gerencia" },
        { min: 529, max: 800, level: "Nivel 6", description: "Puestos directivos" },
        { min: 801, max: 1400, level: "Nivel 7", description: "Puestos de alta dirección" }
    ]
};

// Función para calcular el puntaje de Know-How
function calculateKnowHowScore() {
    const technicalLevel = document.getElementById('technicalCompetence').value;
    const communicationLevel = document.getElementById('communicationLevel').value;
    const integrationScope = document.getElementById('integrationScope').value;
    
    if (!technicalLevel || !communicationLevel || !integrationScope) {
        return null;
    }
    
    // Obtener el índice para la comunicación e integración
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    
    // Obtener el puntaje base de la competencia técnica
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    
    // Calcular el índice total (comunicación + integración)
    const totalIndex = commIndex + intIndex;
    
    // Asegurarse de que el índice no exceda el rango
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas
function calculateProblemSolvingScore(knowHowScore) {
    const complexityLevel = document.getElementById('problemComplexity').value;
    const thinkingFreedom = document.getElementById('thinkingFreedom').value;
    
    if (!complexityLevel || !thinkingFreedom || !knowHowScore) {
        return null;
    }
    
    // Obtener los factores de complejidad
    const complexityFactors = evaluationData.problemSolving.complexity[complexityLevel];
    
    // Obtener el índice de libertad de pensar
    const freedomIndex = evaluationData.problemSolving.thinkingFreedom[thinkingFreedom];
    
    // Asegurarse de que el índice no exceda el rango
    const adjustedIndex = Math.min(freedomIndex, complexityFactors.length - 1);
    
    // Calcular el puntaje como % del know-how
    const percentage = complexityFactors[adjustedIndex];
    return Math.round(knowHowScore * percentage);
}

// Función para calcular el puntaje de Responsabilidad
function calculateResponsibilityScore() {
    const freedomLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const magnitude = document.getElementById('impactMagnitude').value;
    
    if (!freedomLevel || !impactNature || !magnitude) {
        return null;
    }
    
    // Obtener los puntajes base de libertad para actuar
    const freedomScores = evaluationData.responsibility.freedom[freedomLevel];
    
    // Obtener índices de naturaleza y magnitud
    const natureIndex = evaluationData.responsibility.impactNature[impactNature];
    const magnitudeIndex = evaluationData.responsibility.magnitude[magnitude];
    
    // Calcular el índice total (naturaleza + magnitud)
    const totalIndex = natureIndex + magnitudeIndex;
    
    // Asegurarse de que el índice no exceda el rango
    const adjustedIndex = Math.min(totalIndex, freedomScores.length - 1);
    
    return freedomScores[adjustedIndex];
}

// Función para determinar el nivel del puesto
function determineJobLevel(totalScore) {
    for (const level of evaluationData.jobLevels) {
        if (totalScore >= level.min && totalScore <= level.max) {
            return level;
        }
    }
    return { level: "No determinado", description: "Puntaje fuera de rango" };
}

// Función para mostrar los resultados
function showResults(knowHowScore, problemSolvingScore, responsibilityScore) {
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    
    document.getElementById('resultJobTitle').textContent = document.getElementById('jobTitle').value;
    document.getElementById('knowHowScore').textContent = knowHowScore;
    document.getElementById('problemSolvingScore').textContent = problemSolvingScore;
    document.getElementById('responsibilityScore').textContent = responsibilityScore;
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('jobProfile').textContent = jobLevel.description;
    
    // Mostrar detalles de la evaluación
    const details = `
        <p><strong>Know-How:</strong> ${knowHowScore} puntos</p>
        <p><strong>Solución de Problemas:</strong> ${problemSolvingScore} puntos</p>
        <p><strong>Responsabilidad:</strong> ${responsibilityScore} puntos</p>
        <p><strong>Total:</strong> ${totalScore} puntos</p>
        <p><strong>Nivel:</strong> ${jobLevel.level} - ${jobLevel.description}</p>
    `;
    document.getElementById('evaluationDetails').innerHTML = details;
    
    document.getElementById('resultsSection').style.display = 'block';
}

// Función principal de evaluación
function evaluateJob() {
    // Validar que todos los campos estén completos
    const requiredFields = [
        'jobTitle', 'jobDescription', 'jobResponsibilities',
        'technicalCompetence', 'communicationLevel', 'integrationScope',
        'problemComplexity', 'thinkingFreedom',
        'actionFreedom', 'impactNature', 'impactMagnitude'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            alert(`Por favor complete el campo: ${field.labels[0].textContent}`);
            field.focus();
            return;
        }
    }
    
    // Calcular puntajes
    const knowHowScore = calculateKnowHowScore();
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    const responsibilityScore = calculateResponsibilityScore();
    
    if (knowHowScore === null || problemSolvingScore === null || responsibilityScore === null) {
        alert("Error al calcular los puntajes. Verifique los datos ingresados.");
        return;
    }
    
    // Mostrar resultados
    showResults(knowHowScore, problemSolvingScore, responsibilityScore);
}

// Función para guardar la evaluación (simulada)
function saveEvaluation() {
    alert("Evaluación guardada (simulación). En una implementación real, esto guardaría los datos en una base de datos.");
}

// Función para comenzar una nueva evaluación
function newEvaluation() {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobDescription').value = '';
    document.getElementById('jobResponsibilities').value = '';
    
    // Limpiar selects de evaluación
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
    
    // Restablecer puntajes
    document.getElementById('knowHowScore').textContent = '-';
    document.getElementById('problemSolvingScore').textContent = '-';
    document.getElementById('responsibilityScore').textContent = '-';
}

// Event listeners
document.getElementById('evaluateBtn').addEventListener('click', evaluateJob);
document.getElementById('saveBtn').addEventListener('click', saveEvaluation);
document.getElementById('newEvaluationBtn').addEventListener('click', newEvaluation);