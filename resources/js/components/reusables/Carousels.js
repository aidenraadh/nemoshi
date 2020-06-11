class Carousel{

    constructor(carouselID, animDur, animTimingFunc){
    	const items = document.querySelectorAll('#'+carouselID+' .item');
    	console.log(items);
        this.itemsHTML = Object.keys(items).map((index) =>
            items[index].innerHTML
        );

        this.currentItem = 0;
        this.body = document.querySelector('#'+carouselID+' .body');
        this.currentDisplay = document.querySelector('#'+carouselID+' .display');
        this.currentDisplay.innerHTML = this.itemsHTML[this.currentItem];
        this.newDisplay = null;

        this.isAnimating = false;
        this.animDur = (animDur === undefined ? 1000 : animDur);
        this.animTimingFunc = (animTimingFunc === undefined ? 'ease' : animTimingFunc);
    }

    createNewDisplay(itemTarget){
        this.newDisplay = document.createElement('div');
        this.body.insertBefore(this.newDisplay, this.currentDisplay.nextSibling);
        this.newDisplay.innerHTML = this.itemsHTML[itemTarget];
        this.newDisplay.classList.add('display');            
    }

    callback(){
        this.newDisplay.offsetHeight;
        this.currentDisplay.parentNode.removeChild(this.currentDisplay);
        this.newDisplay.removeAttribute('style');
        this.currentDisplay = this.newDisplay;
        this.isAnimating = false;
    }

    slide(DSlideVal, NDSlideVal){
        this.isAnimating = true;
        this.newDisplay.offsetHeight;
        this.newDisplay.setAttribute(
            'style',
            'transition-duration: '+this.animDur+'ms;'+
            'transition-timing-function: '+this.animTimingFunc+';'+
            'transition-property: transform;'+
            'transform: translateX('+NDSlideVal+'%);'
        );
        this.currentDisplay.setAttribute(
            'style',
            'transition-duration: '+this.animDur+'ms;'+
            'transition-timing-function: '+this.animTimingFunc+';'+
            'transition-property: transform;'+
            'transform: translateX('+DSlideVal+'%);'
        );

        this.currentDisplay.addEventListener('transitionend', this.callback.bind(this), {once: true});
                            
    }

    prevItem(){
        if(!this.isAnimating){
            if(this.currentItem === 0){
                this.currentItem = this.itemsHTML.length - 1;
            }
            else{
                this.currentItem -= 1;
            }
            this.createNewDisplay(this.currentItem);
            this.newDisplay.setAttribute('style', 'transform: translateX(-200%);');
            this.slide(100, -100);
        }
    }

    nextItem(){
        if(!this.isAnimating){
            if(this.currentItem === (this.itemsHTML.length - 1)){
                this.currentItem = 0;
            }
            else{
                this.currentItem += 1;
            }
            this.createNewDisplay(this.currentItem);
            this.slide(-100, -100);
        }
    }

    goToItem(itemTarget){
        if((itemTarget !== this.currentItem) && (itemTarget >= 0 && itemTarget < this.itemsHTML.length)){
            if(!this.isAnimating){
                this.createNewDisplay(itemTarget);
                if(itemTarget < this.currentItem){
                    this.currentItem = itemTarget;
                    this.newDisplay.setAttribute('style', 'transform: translateX(-200%);');
                    this.slide(100, -100);
                }
                else{
                    this.currentItem = itemTarget;
                    this.slide(-100, -100);
                }
            }
        }
    }
/*    init(prevItemBtn, nextItemBtn){
    	const prevItem = this.prevItem;
    	const nextItem = this.nextItem;
    	prevItemBtn.addEventListener('click', prevItem);
    	nextItemBtn.addEventListener('click', nextItem);
    }*/
}

const x = new Carousel('testcarousel');

/*
<div class="Carousel" id="testcarousel" style="width: 100%;">
    <div class="body">
        <div class="display">
        </div>
        <div class="item">
            <img src="images/bg_1.jpg" style="width: 100%; height: auto;">
            <!-- Your item here -->
        </div>
        <div class="item">
            <img src="images/bg_2.jpg" style="width: 100%; height: auto;">
            <!-- Your item here -->
        </div>
        <div class="item">
            <img src="images/bg_3.jpg" style="width: 100%; height: auto;">
            <!-- Your item here -->
        </div>     
        <div class="item">
            <img src="images/bg_4.jpg" style="width: 100%; height: auto;">
            <!-- Your item here -->
        </div>         
    </div>
</div>        
<button type="button" id="prevItem" onclick="x.prevItem()">prev</button>
<button type="button" id="nextItem" onclick="x.nextItem()">next</button>
*/