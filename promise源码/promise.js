class Promise {
    constructor(executor) {
        this.statue = 'pedding';//默认等待态
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallback = [];
        this.onRejectedCallback = [];


        let resolve = (value) => {
            if (this.statue === 'pedding') {
                this.statue = 'fulfilled';
                this.value = value;
                this.onResolvedCallback.forEach(fn => fn())
            }

        };
        let reject = (reason) => {
            if (this.statue === 'pedding') {
                this.statue = 'rejected';
                this.reason = reason;
                this.onRejectedCallback.forEach(fn => fn())
            }

        };


        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        let p
        p = new Promise((resolve, reject) => {
            if (this.statue === 'fulfilled') {
                onFulfilled(this.value);
            }
            if (this.statue === 'rejected') {
                onRejected(this.reason);
            }
            if (this.statue === 'pedding') {
                this.onResolvedCallback.push(() => {
                    onFulfilled(this.value);
                })
                this.onRejectedCallback.push(() => {
                    onRejected(this.reason);
                })
            }
        })

    }
    catch() {

    }
}

module.exports = Promise;