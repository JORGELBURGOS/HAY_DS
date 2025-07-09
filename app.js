// Datos de evaluación
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
    ]
};

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    const container = document.querySelector('.notification-container');
    if (container) {
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Función para cambiar de sección
function goToSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.step[data-step="${sectionId.split('-')[0]}"]`).classList.add('active');
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para calcular el puntaje de Know-How
function calculateKnowHowScore() {
    const technicalLevel = document.getElementById('technicalCompetence').value;
    const communicationLevel = document.getElementById('communicationLevel').value;
    const integrationScope = document.getElementById('integrationScope').value;
    
    if (!technicalLevel || !communicationLevel || !integrationScope) {
        showNotification('Por favor complete todos los campos de Know-How', 'error');
        return null;
    }
    
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    
    const totalIndex = commIndex + intIndex;
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas
function calculateProblemSolvingScore(knowHowScore) {
    const complexityLevel = document.getElementById('problemComplexity').value;
    const thinkingFreedom = document.getElementById('thinkingFreedom').value;
    
    if (!complexityLevel || !thinkingFreedom || !knowHowScore) {
        showNotification('Por favor complete todos los campos de Solución de Problemas', 'error');
        return null;
    }
    
    const complexityFactors = evaluationData.problemSolving.complexity[complexityLevel];
    const freedomIndex = evaluationData.problemSolving.thinkingFreedom[thinkingFreedom];
    const adjustedIndex = Math.min(freedomIndex, complexityFactors.length - 1);
    
    const percentage = complexityFactors[adjustedIndex];
    return Math.round(knowHowScore * percentage);
}

// Función para calcular el puntaje de Responsabilidad
function calculateResponsibilityScore() {
    const freedomLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const magnitude = document.getElementById('impactMagnitude').value;
    
    if (!freedomLevel || !impactNature || !magnitude) {
        showNotification('Por favor complete todos los campos de Responsabilidad', 'error');
        return null;
    }
    
    const freedomScores = evaluationData.responsibility.freedom[freedomLevel];
    const natureIndex = evaluationData.responsibility.impactNature[impactNature];
    const magnitudeIndex = evaluationData.responsibility.magnitude[magnitude];
    
    const totalIndex = natureIndex + magnitudeIndex;
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
    return { 
        level: "No determinado", 
        description: "El puntaje calculado está fuera de los rangos predefinidos" 
    };
}

// Función para animar el círculo de progreso
function animateProgressCircle(score) {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 1400) * circumference;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

// Función para animar el conteo numérico
function animateNumberCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (element) {
        let current = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Función para animar las barras de progreso
function animateProgressBars(scores) {
    const bars = [
        { id: 'knowhow-bar', value: scores.knowHow / 1056 * 100 },
        { id: 'problemsolving-bar', value: scores.problemSolving / 1056 * 100 },
        { id: 'responsibility-bar', value: scores.responsibility / 1400 * 100 }
    ];
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const barElement = document.getElementById(bar.id);
            if (barElement) {
                barElement.style.width = `${bar.value}%`;
            }
        }, 300 * (index + 1));
    });
}

// Función mejorada para guardar en LocalStorage
function saveEvaluationToLocal(data) {
    try {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        // Añadir ID y fecha única a cada evaluación
        const evaluationWithMeta = {
            ...data,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        evaluations.push(evaluationWithMeta);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        
        return { success: true, id: evaluationWithMeta.id };
    } catch (error) {
        console.error('Error al guardar en LocalStorage:', error);
        return { success: false, error: error.message };
    }
}

// Función mejorada para exportar evaluación
function exportEvaluation(data, format = 'json') {
    try {
        let content, mimeType, extension;
        
        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            extension = 'json';
        } else if (format === 'csv') {
            // Convertir a CSV
            const headers = ['Campo', 'Valor'];
            const rows = [
                ['Puesto', data.jobTitle],
                ['Descripción', data.jobDescription],
                ['Responsabilidades', data.jobResponsibilities],
                ['Puntaje Total', data.scores.total],
                ['Nivel', data.level.level],
                ['Know-How', data.scores.knowHow],
                ['Solución Problemas', data.scores.problemSolving],
                ['Responsabilidad', data.scores.responsibility],
                ['Fecha Evaluación', new Date(data.evaluationDate).toLocaleDateString()]
            ];
            
            content = [headers, ...rows].map(row => 
                row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
            ).join('\n');
            
            mimeType = 'text/csv';
            extension = 'csv';
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createobjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `evaluacion_${data.jobTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        return true;
    } catch (error) {
        console.error('Error al exportar evaluación:', error);
        showNotification('Error al exportar la evaluación', 'error');
        return false;
    }
}

// Función para mostrar diálogo de opciones de guardado
function showSaveOptionsDialog() {
    const dialog = document.createElement('div');
    dialog.className = 'save-dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Guardar Evaluación</h3>
            <p>Seleccione cómo desea guardar la evaluación:</p>
            <div class="options">
                <button id="saveLocalBtn" class="btn btn-option">
                    <i class="fas fa-laptop"></i> Solo en este navegador
                </button>
                ${window.db ? `
                <button id="saveCloudBtn" class="btn btn-option">
                    <i class="fas fa-cloud"></i> En la nube (accesible desde cualquier dispositivo)
                </button>
                ` : ''}
                <button id="saveBothBtn" class="btn btn-option">
                    <i class="fas fa-sync-alt"></i> En ambos lugares
                </button>
                <button id="saveCancelBtn" class="btn btn-cancel">
                    <i class="fas fa-times"></i> Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    // Event listeners para los botones
    document.getElementById('saveLocalBtn').addEventListener('click', () => {
        const result = saveEvaluationToLocal(window.currentEvaluation);
        handleSaveResult(result, 'local');
        dialog.remove();
    });
    
    if (window.db) {
        document.getElementById('saveCloudBtn').addEventListener('click', async () => {
            const result = await saveEvaluationToFirestore(window.currentEvaluation);
            handleSaveResult(result, 'cloud');
            dialog.remove();
        });
        
        document.getElementById('saveBothBtn').addEventListener('click', async () => {
            const localResult = saveEvaluationToLocal(window.currentEvaluation);
            const cloudResult = await saveEvaluationToFirestore(window.currentEvaluation);
            
            if (localResult.success && cloudResult.success) {
                showNotification('Evaluación guardada en ambos lugares', 'success');
            } else if (!localResult.success && !cloudResult.success) {
                showNotification('Error al guardar en ambos lugares', 'error');
            } else {
                showNotification(
                    `Evaluación guardada solo ${localResult.success ? 'localmente' : 'en la nube'}`,
                    localResult.success || cloudResult.success ? 'warning' : 'error'
                );
            }
            dialog.remove();
        });
    }
    
    document.getElementById('saveCancelBtn').addEventListener('click', () => {
        dialog.remove();
    });
}

function handleSaveResult(result, type) {
    if (result.success) {
        const message = type === 'local' 
            ? 'Evaluación guardada localmente' 
            : 'Evaluación guardada en la nube';
        showNotification(message, 'success');
        
        // Actualizar lista de evaluaciones si existe esa funcionalidad
        if (typeof updateEvaluationsList === 'function') {
            updateEvaluationsList();
        }
    } else {
        showNotification(`Error al guardar ${type === 'local' ? 'localmente' : 'en la nube'}: ${result.error}`, 'error');
    }
}

// Función principal de evaluación
function evaluateJob() {
    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    
    // Mostrar resultados
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = document.getElementById('jobTitle').value;
    
    // Animaciones
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    animateNumberCounter('knowHowScore', knowHowScore);
    animateNumberCounter('problemSolvingScore', problemSolvingScore);
    animateNumberCounter('responsibilityScore', responsibilityScore);
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });
    
    // Ir a la sección de resultados
    goToSection('results-section');
    
    // Preparar datos para guardar
    const evaluationData = {
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
        level: jobLevel
    };
    
    // Guardar en memoria para posible exportación/guardado
    window.currentEvaluation = evaluationData;
}

// Añadir CSS para el diálogo de guardado
const saveDialogStyle = document.createElement('style');
saveDialogStyle.textContent = `
.save-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.save-dialog .dialog-content {
    background: white;
    padding: 25px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.2);
    animation: dialogFadeIn 0.3s ease;
}

@keyframes dialogFadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.save-dialog h3 {
    margin-top: 0;
    color: #4361ee;
}

.save-dialog .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.btn-option {
    text-align: left;
    justify-content: flex-start;
    padding: 12px 15px;
    background: #f8f9fa;
    color: #1a1a2e;
    border: 1px solid #ddd;
}

.btn-option:hover {
    background: #e9ecef;
    transform: none;
}

.btn-option i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
}

.btn-cancel {
    margin-top: 15px;
    background: transparent;
    color: #666;
}
`;
document.head.appendChild(saveDialogStyle);

// Event Listeners
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
    
    // Botón de guardar (ahora muestra el diálogo de opciones)
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
            // Podrías añadir aquí un diálogo para seleccionar formato
            exportEvaluation(window.currentEvaluation, 'json'); // o 'csv'
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });
    
    // Botón de nueva evaluación
    document.getElementById('newEvalBtn')?.addEventListener('click', () => {
        window.currentEvaluation = null;
        document.getElementById('jobTitle').value = '';
        document.getElementById('jobDescription').value = '';
        document.getElementById('jobResponsibilities').value = '';
        
        // Resetear selects
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        
        goToSection('description-section');
    });
    
    // Botón de nueva evaluación desde el header
    document.getElementById('newEvaluationBtn')?.addEventListener('click', () => {
        window.currentEvaluation = null;
        goToSection('description-section');
    });
    
    // Botón para generar PDF (simulado)
    document.getElementById('generatePdfBtn')?.addEventListener('click', () => {
        showNotification('Función de PDF en desarrollo', 'warning');
    });
});