class cnt_vst{

  constructor(){
    this.bclicks=0;
    this.nclicks=0;

  }

  setCnt_blog(b){
    this.bclicks=b;
  }

  setCnt_news(n){
    this.nclicks=n;
  }

  addPage_blog(){
    this.bclicks++;
    return this.bclicks;
  }

  addPage_news(){
    this.nclicks++;
    return this.nclicks;
  }

  getCount_b(){
    return this.bclicks;
  }

  getCount_n(){
    return this.nclicks;
  }
}

module.exports = cnt_vst;
