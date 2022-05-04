AFRAME.registerComponent('driver-rotation',{
    schema:{
        speedofrotation:{type:'number',default:0},
        speedofascent:{type:'number',default:0}
    },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            this.data.speedofrotation=this.el.getAttribute('rotation')
            this.data.speedofascent=this.el.getAttribute('position')
            var rotation=this.data.speedofrotation
            var ascent=this.data.speedofascent
            if(e.key==='ArrowRight'){
                rotation.x+=0.5
                this.el.setAttribute('rotation',rotation)
                ascent.x+=0.01
                this.el.setAttribute('position',ascent)
            }
            if(e.key==='ArrowLeft'){
                rotation.x-=0.5
                this.el.setAttribute('rotation',rotation)
                ascent.x-=0.01
                this.el.setAttribute('position',ascent)
            }
            if(e.key==='ArrowUp'){
                rotation.z+=0.5
                this.el.setAttribute('rotation',rotation)
                ascent.y+=0.01
                this.el.setAttribute('position',ascent)
            }
            if(e.key==='ArrowDown'){
                rotation.z-=0.5
                this.el.setAttribute('rotation',rotation)
                ascent.y-=0.01
                this.el.setAttribute('position',ascent)
            }
        })
    }
})
