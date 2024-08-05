//Implement a queue class with methods enqueue( add element), dequeue(remove element), and front (view the first element)

class Queue{
    constructor(){
      this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
       if(this.isEmpty()){
        throw new error("Queue is empty");
       }
       return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());

queue.clear();
console.log(queue.isEmpty());

//Use queue class to stimulate a simple printer where print jobs are added to the queue and processed in order

function simulatePrinter(){
    const printQueue = new Queue();

    function addPrintJob(job){
        console.log(`Adding print job: ${job}`);
        printQueue.enqueue(job);
    }

    function processPrintJobs() {
        while (!printQueue.isEmpty()) {
          const currentJob = printQueue.dequeue();
          console.log(`Processing print job: ${currentJob}`);
        }
        console.log("All print jobs have been processed.");
      }
    
      // Adding some print jobs to the queue
      addPrintJob("Document1.pdf");
      addPrintJob("Photo.jpg");
      addPrintJob("Spreadsheet.xlsx");
    
      // Processing the print jobs
      processPrintJobs();
}

simulatePrinter();

