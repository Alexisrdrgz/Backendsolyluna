import mongoose,{Schema} from "mongoose";   
const articulosSchema = new Schema({

    categoria: {type: Schema.ObjectId,ref:'categoria'},
    codigo: {type:String,maxlenght:64},
    nombre:{type:String,maxlenght:50,unique:true,required:true},
    descripcion:{type:String,maxlenght:255},
    precio_venta:{type:Number,required:true},
    stock:{type:Number,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}


})

const Articulo = mongoose.model('articulo',articulosSchema);
export default Articulo;