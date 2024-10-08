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
greet();
greet('Alice'); 
import * as Highcharts from 'highcharts';

describe('Highcharts Chart Event Tests', () => {
  let chart: any;
  let chartOptions: any;

  beforeEach(() => {
    // Mock Highcharts functions and chart object
    chartOptions = {
      chart: {
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
      }
    };

    // Mock chart object with the necessary properties
    chart = {
      container: document.createElement('div'),
      tooltip: {
        hide: jasmine.createSpy('hide')
      },
      hoverPoint: null
    };

    // Simulate the load event handler to attach mouse events
    chartOptions.chart.events.load.call(chart);
  });

  it('should hide the tooltip on mouseleave', () => {
    // Trigger the mouseleave event
    const mouseLeaveEvent = new Event('mouseleave');
    chart.container.dispatchEvent(mouseLeaveEvent);

    // Assert that the tooltip hide function was called
    expect(chart.tooltip.hide).toHaveBeenCalled();
  });

  it('should hide the tooltip on mousemove when no point is hovered', () => {
    // Trigger the mousemove event without a hoverPoint
    const mouseMoveEvent = new Event('mousemove');
    chart.container.dispatchEvent(mouseMoveEvent);

    // Assert that the tooltip hide function was called
    expect(chart.tooltip.hide).toHaveBeenCalled();
  });

  it('should not hide the tooltip on mousemove when a point is hovered', () => {
    // Set a hoverPoint
    chart.hoverPoint = { some: 'point' };

    // Trigger the mousemove event with a hoverPoint
    const mouseMoveEvent = new Event('mousemove');
    chart.container.dispatchEvent(mouseMoveEvent);

    // Assert that the tooltip hide function was not called
    expect(chart.tooltip.hide).not.toHaveBeenCalled();
  });
});


            