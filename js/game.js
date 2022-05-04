AFRAME.registerComponent('game-play',{
    schema:{
        elementid:{type:'string',default:'#coin1'}
    },
    update:function(){
        this.isColided(this.data.elementid)
    },
    isColided:function(elementid){
        const element=document.querySelector(elementid)
        element.addEventListener('collide',e=>{
            if(elementid.includes('#coin')){
                console.log('coin')
            }else if(elementid.includes('#fish')){
                console.log('fish')
            }
        })
    }
})