class GameTimer {
    constructor() {

    }

    start() {
        this.a = 330;
        this.time = setInterval(() => {
            this.a--;
        }, 1000);   
    }

    draw() {
        fill(255);
        rect(415, 0, 100, 50);
        fill(0);
        textSize(20);
        text('Time left', 420, 20)
      
        let minutes = floor(this.a / 60);
        let seconds = this.a - (minutes * 60);
        let remaining = `${minutes}:${nf(seconds, 2)}`
      
        text(remaining, 445, 40);
    }

    elapsed() {
        if (this.a <= 0) {
            return true;
        } else {
            return false;
        }
    }
}