import fetch from "node-fetch";

function makeAPICalls(url){
    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('HTTP Error', response.status);
            }
            return response.json();
        })
}

Promise.race([
    makeAPICalls('https://jsonplaceholder.typicode.com/posts'),
    makeAPICalls('https://jsonplaceholder.typicode.com/users'),
    makeAPICalls('https://jsonplaceholder.typicode.com/comments')
]).then((firstResponse) => {
    console.log('Data form API to respond', firstResponse);
}).catch((error) => {
    console.log('An error occurred', error);
})

tooltip: {
    useHTML: true,
    backgroundColor: "#FFFFFF",
    borderColor: "#D3D3D3",
    hideDelay: 0, // Ensures tooltip disappears instantly when mouse leaves
    stickyTracking: false, // Prevents tooltip from appearing in empty spaces
    followPointer: false, // Ensures tooltip sticks to the bars only
    formatter: function () {
        let tooltipText = `<span style="font-size: 16px; font-family: Montserrat, sans-serif !important; font-weight: bold; line-height: 2;">${this.x}</span><br/>`;

        this.series.chart.series.forEach(series => {
            const point = series.data.find(p => p.x === this.point.x);
            if (point) {
                const percentage = Math.round((point.y / series.chart.series.reduce((sum, s) => sum + (s.data.find(p => p.x === point.x)?.y || 0), 0)) * 100);
                tooltipText += `<span style="font-size: 14px; font-family: Montserrat, sans-serif !important; font-weight: bold; line-height: 2;">${series.name}:</span> 
                                <span style="font-size: 14px; font-family: Montserrat, sans-serif !important; font-weight: 400;">${point.y} (${percentage}%)</span><br/>`;
            }
        });

        return tooltipText;
    }
}
