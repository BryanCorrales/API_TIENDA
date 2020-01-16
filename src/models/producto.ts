import {Schema, model} from 'mongoose';

let productoSchema = new Schema(
    {
        nombre:{
            type:String,required:[true, 'El nombre es requerido']
        },
        precio:{
            type:Number,required:[true,'El precio es requerido']
        },
        descripcion:{
            type:String,required:[false]
        },
        disponible:{
            type:Boolean,required:true,default:true
        },
        categoria:{
            type:Schema.Types.ObjectId, required:true, ref:'Categoria'
        }
    }
);
//Exportar todo el modelo en los archivos necesarios.

export default model('Producto',productoSchema);