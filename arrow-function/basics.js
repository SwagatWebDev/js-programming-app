function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// parameter => expression
const result = (a, b) => a + b;
console.log(result(2, 3));

const square = a => a * a;
console.log(square(5));

// callback
setTimeout(function (){
    console.log("Callback Function called")
}, 2000);

setTimeout(() => {
    console.log("Callback Function called");
}, 2000);

// Object Literals
const person = {
    name: 'John',
    greet:  () => {
        console.log(`Hello my name is John`)
    }
}
person.greet();

// default parameter

const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}`)
};
chartContainer = document.createElement('div');
    chartContainer.id = 'chart-container';
    document.body.appendChild(chartContainer);

    // Define the chart options including the load event
    chartOptions = {
      chart: {
        renderTo: 'chart-container', // Ensure proper container
        type: 'bar',
        backgroundColor: '#F9F9FB',
        marginTop: 100,
        events: {
          load: function () {
            const chart = this;
            Highcharts.addEvent(chart.container, 'mouseleave', function () {
              chart.tooltip.hide();
            });
            Highcharts.addEvent(chart.container, 'mousemove', function () {
              const point = chart.hoverPoint;
              if (!point) {
                chart.tooltip.hide();
              }
            });
          }
        }
      },
      credits: {
        enabled: false
      }
    };

    // Create the chart instance
    chart = Highcharts.chart(chartOptions);
  });

  afterEach(() => {
    // Clean up chart container after each test
    if (chart) {
      chart.destroy();
    }
    if (chartContainer) {
      document.body.removeChild(chartContainer);
    }
  });

  it('should trigger load event and attach mouseleave/mousemove listeners', () => {
    // Spy on the chart's load event
    const loadSpy = spyOn(chartOptions.chart.events, 'load').and.callThrough();

    // Manually trigger the load event
    chartOptions.chart.events.load.call(chart);

    // Check if load event was called
    expect(loadSpy).toHaveBeenCalled();

    // Simulate mouseleave event after the load event is triggered
    const mouseLeaveEvent = new Event('mouseleave');
    chart.container.dispatchEvent(mouseLeaveEvent);

    // Expect tooltip to be hidden after mouseleave
    expect(chart.tooltip.isHidden).toBeTrue();

    // Simulate mousemove event without a hover point
    spyOnProperty(chart, 'hoverPoint', 'get').and.returnValue(null);
    const mouseMoveEvent = new Event('mousemove');
    chart.container.dispatchEvent(mouseMoveEvent);

    // Expect tooltip to be hidden when no point is hovered
    expect(chart.tooltip.isHidden).toBeTrue();
  });
});
