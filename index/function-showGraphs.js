function showGraphs() {
    var career = document.getElementById('career').value;
    var graphList = document.getElementById('graphList');
    
    if (career === "ingenieria-informatica-2018") {
        graphList.style.display = 'block';
        var enlace = document.createElement("a");
        enlace.href = `grafo.html?carrera=${career}`;
        enlace.textContent = "Ver Grafo";
        document.getElementById("graphList").appendChild(enlace);
    } else {
        alert('No hay grafos disponibles para su carrera');
        graphList.style.display = 'none';
    }
}
