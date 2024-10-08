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

// Spy on Highcharts to monitor chart creation
    spyOn(Highcharts, 'chart').and.callFake((options: any) => {
      chart = {
        container: document.createElement('div'),
        tooltip: { hide: jasmine.createSpy('hide'), isHidden: true },
        hoverPoint: null
      } as any;
      options.chart.events.load.call(chart); // Manually trigger load event
      return chart;
    });

    fixture.detectChanges(); // Trigger ngOnInit and chart rendering
  });

  it('should trigger load event and attach mouseleave/mousemove listeners', () => {
    // Spy on the load function
    const loadSpy = spyOn(component.chartOptions.chart.events, 'load').and.callThrough();

    // Trigger the load event manually
    component.chartOptions.chart.events.load.call(chart);

    expect(loadSpy).toHaveBeenCalled(); // Verify the load event is called

    // Simulate mouseleave event
    const mouseLeaveEvent = new Event('mouseleave');
    chart.container.dispatchEvent(mouseLeaveEvent);

    // Expect the tooltip to be hidden after mouseleave
    expect(chart.tooltip.hide).toHaveBeenCalled();
    expect(chart.tooltip.isHidden).toBeTrue();

    // Simulate mousemove event without hoverPoint
    chart.hoverPoint = null;
    const mouseMoveEvent = new Event('mousemove');
    chart.container.dispatchEvent(mouseMoveEvent);

    // Expect tooltip to be hidden when no point is hovered
    expect(chart.tooltip.hide).toHaveBeenCalled();
  });
