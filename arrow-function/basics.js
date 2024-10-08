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

let mockChart: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;

    // Mock Highcharts.chart to return a fake chart instance with necessary methods
    mockChart = {
      container: document.createElement('div'),
      tooltip: {
        hide: jasmine.createSpy('hide'),
        isHidden: false
      },
      hoverPoint: null,
      update: jasmine.createSpy('update'),
      // Simulate the chart's events
      options: {
        chart: {
          events: {
            load: jasmine.createSpy('load'),
          }
        }
      }
    };

    // Spy on Highcharts.chart() to return the mocked chart object
    spyOn(Highcharts, 'chart').and.returnValue(mockChart);

    fixture.detectChanges(); // Trigger ngOnInit() and initialize the chart
  });

  it('should initialize chartOptions and set up load event', () => {
    // Ensure the component has defined chartOptions
    expect(component.chartOptions).toBeDefined();
    expect(Highcharts.chart).toHaveBeenCalled();
  });

  it('should call the load event and set up mouseleave and mousemove events', () => {
    // Simulate the load event
    component.chartOptions.chart.events.load.call(mockChart);

    // Expect the load event to be called
    expect(mockChart.options.chart.events.load).toHaveBeenCalled();

    // Simulate a mouseleave event
    const mouseLeaveEvent = new Event('mouseleave');
    mockChart.container.dispatchEvent(mouseLeaveEvent);
    expect(mockChart.tooltip.hide).toHaveBeenCalled();

    // Simulate a mousemove event with no hoverPoint
    mockChart.hoverPoint = null;
    const mouseMoveEvent = new Event('mousemove');
    mockChart.container.dispatchEvent(mouseMoveEvent);
    expect(mockChart.tooltip.hide).toHaveBeenCalled();
  });

  it('should not hide tooltip when there is a hover point on mousemove', () => {
    // Simulate a mousemove event with a hoverPoint
    mockChart.hoverPoint = { x: 10, y: 20 }; // Mock a point
    const mouseMoveEvent = new Event('mousemove');
    mockChart.container.dispatchEvent(mouseMoveEvent);

    // Tooltip should not be hidden
    expect(mockChart.tooltip.hide).not.toHaveBeenCalled();
  });
});
