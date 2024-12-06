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

import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-your-modal',
  templateUrl: './your-modal.component.html',
  styleUrls: ['./your-modal.component.css'],
})
export class YourModalComponent {
  @ViewChild('scrollableContainer', { static: true }) scrollableContainer!: ElementRef;

  assetSummaryData: any[] = []; // Full dataset
  displayedData: any[] = []; // Data to display
  itemsPerPage: number = 100; // Items to load per batch
  currentPage: number = 1; // Tracks the current slice of data
  isLoading: boolean = false; // Prevents multiple calls while loading

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    // Load the first batch of data
    this.displayedData = this.assetSummaryData.slice(0, this.itemsPerPage);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const container = this.scrollableContainer.nativeElement;

    // Check if the user scrolled near the bottom
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 100 // Threshold for triggering more data
    ) {
      this.loadMoreData();
    }
  }

  loadMoreData(): void {
    if (this.isLoading) return; // Prevent multiple simultaneous calls

    this.isLoading = true;
    const nextPageStart = this.currentPage * this.itemsPerPage;
    const nextPageEnd = nextPageStart + this.itemsPerPage;

    // Simulate data fetching
    setTimeout(() => {
      const newItems = this.assetSummaryData.slice(nextPageStart, nextPageEnd);
      this.displayedData.push(...newItems);
      this.currentPage++;
      this.isLoading = false;
    }, 300); // Simulate network delay
  }
}

