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
getBuProductArchitectureFreshnessData(): void {
    this.freshnessFlag = false;

    if (this.groupCio) {
        if (this.hasFreshnessData(this.productArchitectureService.productArchitectureFreshnessCioData, 
                                  this.productArchitectureService.solutionArchitectureFreshnessCioData)) {
            this.assignFreshnessData(true);
            this.initChartWithArchitectureFreshnessChart();
            return;
        }
    } else if (this.hasFreshnessData(this.productArchitectureService.productArchitectureFreshnessBuData, 
                                     this.productArchitectureService.solutionArchitectureFreshnessBuData)) {
        this.assignFreshnessData(false);
        this.initChartWithArchitectureFreshnessChart();
        return;
    }

    // API Call using forkJoin
    this.subscriptions.push(
        forkJoin({
            buProductArchitectureDates: this.httpService.getData(this.buProductArchitectureDateUrl),
            freshnessData: this.httpService.getData(
                this.reportId === ReportName.productsWithArchitecturesReport
                    ? this.endpoints.PRODUCT_WITH_ARCHITECTURE_BY_CIO
                    : this.endpoints.SOLUTIONS_WITH_ARCHITECTURE_BY_CIO,
                { groupCio: this.groupCio } as unknown as RequestParam
            )
        }).subscribe(({ buProductArchitectureDates, freshnessData }) => {
            if (buProductArchitectureDates) {
                this.processBuProductArchitectureDates(buProductArchitectureDates);
            }
            if (freshnessData) {
                this.processFreshnessData(freshnessData);
            }
            this.initChartWithArchitectureFreshnessChart();
        })
    );
}

// Helper method to check if freshness data exists
private hasFreshnessData(productData: any[], solutionData: any[]): boolean {
    return productData.length > 0 && solutionData.length > 0;
}

// Assign Freshness Data
private assignFreshnessData(isCioGroup: boolean): void {
    if (this.reportId === ReportName.productsWithArchitecturesReport) {
        this.buProductWithArchFreshnessData = isCioGroup
            ? this.productArchitectureService.productArchitectureFreshnessCioData
            : this.productArchitectureService.productArchitectureFreshnessBuData;
    } else {
        this.buSolutionWithArchFreshnessData = isCioGroup
            ? this.productArchitectureService.solutionArchitectureFreshnessCioData
            : this.productArchitectureService.solutionArchitectureFreshnessBuData;
    }
}

// Process BU Product Architecture Dates
private processBuProductArchitectureDates(response: any): void {
    this.buProductArchitectureDates = Array.isArray(response[0]?.response) ? response[0].response : [response[0].response];
    this.dataService.buProductArchitectureDateList = this.buProductArchitectureDates;
}

// Process Freshness Data
private processFreshnessData(response: any): void {
    const freshnessResponse = Array.isArray(response[1]?.response) ? response[1].response : [response[1].response];

    if (this.reportId === ReportName.productsWithArchitecturesReport) {
        this.buProductWithArchFreshnessData = freshnessResponse;
    } else {
        this.buSolutionWithArchFreshnessData = freshnessResponse;
    }
}


