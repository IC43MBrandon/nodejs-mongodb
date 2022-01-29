import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    title: { type: Number,
            required: true, 
            trim: true, 
            unique: [ false, 'La matricula esta repetida' ] },
    nombre: {
      type      : String, 
      required  : [ true, 'El nombre es necesario' ], 
      maxlength : [ 50, 'El nombre no puede exceder los 50 caracteres'],
      minlength : [ 3, 'El nombre debe contener 3 o más caracteres'],
      match: [ /[a-zA-Z ]/, 'El nombre solo acepta letras' ],
      trim: true,
    },
    apellido_paterno: {
      type: String,
      required  : [ true, 'El apellido es necesario' ], 
      maxlength : [ 50, 'El apellido no puede exceder los 50 caracteres'],
      minlength : [ 3, 'El apellido debe contener 3 o más caracteres'],
      match: [ /[a-zA-Z ]/, 'El apellido solo acepta letras' ],
      trim: true,
    },

    apellido_matern: {
      type: String,
      required  : [ true, 'El apellido es necesario' ], 
      maxlength : [ 50, 'El apellido no puede exceder los 50 caracteres'],
      minlength : [ 3, 'El apellido debe contener 3 o más caracteres'],
      match: [ /[a-zA-Z ]/, 'El apellido solo acepta letras' ],
      trim: true,
    },
    
    genero: {
      type: String,
      enum: ['H', 'M'],
  },
  edad: {
    type: Number,
    required  : [ true, 'La edad es necesaria' ], 
    min:  [ 14, 'La edad no puede ser menor que 14'],
     max: [ 99, 'La edad no puede ser mayor que 99'],
  },
  estadocivil: {
    type: String,
    enum: ['Soltero', 'Casado', 'Divorciado', 'Union_libre'],
    default: null
  },
  turno:{
    type: String,
    enum: ['Matutino', 'Vespertino'],
  },
  especialidad:{
    type: String,
    enum: ['Laboratorio', 'Contabilidad', 'Ofimatica', 'Dietetica'],
    default: null
  },
  calle: {
    type      : String, 
    required  : [ true, 'La calle es necesaria' ], 
    maxlength : [ 50, 'La calle no puede exceder los 50 caracteres'],
    minlength : [ 3, 'La calle debe contener 3 o más caracteres'],
    match: [ /[a-zA-Z ]/, 'La calle solo acepta letras' ],
    trim: true,
  },

  numero_exterior:{
    type: Number,
    minimum: 1,
    maximum: 2,
  },

  numero_interior:{
    type: Number,
    minimum: 1,
    maximum: 2,
  },

  colonia: {
    type      : String, 
    required  : [ true, 'La colonia es necesaria' ], 
    maxlength : [ 50, 'La colonia no puede exceder los 50 caracteres'],
    minlength : [ 3, 'La colonia debe contener 3 o más caracteres'],
    match: [ /[a-zA-Z ]/, 'La colonia solo acepta letras' ],
    trim: true,
  },

  municipio: {
    type      : String, 
    required  : [ true, 'El municipio es necesario' ], 
    maxlength : [ 50, 'El municipio no puede exceder los 50 caracteres'],
    minlength : [ 3, 'El municipio debe contener 3 o más caracteres'],
    match: [ /[a-zA-Z ]/, 'El municipio solo acepta letras' ],
    trim: true,
  },

  ciudad: {
    type      : String, 
    required  : [ true, 'La ciudad es necesaria' ], 
    maxlength : [ 50, 'La ciudad no puede exceder los 50 caracteres'],
    minlength : [ 3, 'La ciudad debe contener 3 o más caracteres'],
    match: [ /[a-zA-Z ]/, 'La ciudad solo acepta letras' ],
    trim: true,
  },

  codigo_postal:{
    type: Number,
    mininum: 5,
    maxinum: 5,
  },

  telefono_celular:{
    type: Number,
    mininum: 5,
    maxinum: 5,
  },

  telefono_casa:{
    type: Number,
    mininum: 5,
    maxinum: 5,
  },

  plantel_egreso:{
    type      : String, 
    required  : [ true, 'El plantel es necesario' ], 
    maxlength : [ 50, 'El plantel no puede exceder los 50 caracteres'],
    minlength : [ 5, 'El plantel debe contener 5 o más caracteres'],
    match: [ /[a-zA-Z ]/, 'El nombre solo acepta letras' ],
    trim: true,
  },

  correo:{
    type      : String, 
    unique    : [ true, 'El correo está duplicado'], 
    required  : [ true, 'El correo es necesario' ], 
    maxlength : [ 40, 'El correo no puede exceder los 30 caracteres'],
    match: [ /[a-zA-Z ]/, 'El correo no pueden ser solo numeros' ],
    regex     : function( value ) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
},

año_ingreso: {
  type: Number,
  required  : [ true, 'El año de ingreso es necesario' ], 
  min:  [ 1990, 'El año no puede ser menor que 1990'],
  max: [ 2022, 'El año no puede ser mayor que 2022'],
},

año_egreso: {
  type: Number,
  required  : [ true, 'El año de egreso es necesario' ], 
  min:  [ 1990, 'El año no puede ser menor que 1990'],
   max: [ 2022, 'El año no puede ser mayor que 2022'],
},

grupo:{
  type: String,
  enum: ['1601','1602','1603', '1607','1608','1609','1612','1613','1614','1615','1616',
   '2601','2602', '2603','2607', '2608','2609','2612','2613','2614','2615','2616'],
},


modalidad_servicio:{
  type: String,
  enum: ['Escolarizado', 'Sistema abierto'],
},

actividad_que_realiza:{
  type: String,
  enum: ['Estudia', 'Trabaja', 'No estudia ni trabaja'],
},

estudia_nivel_superior:{
  type: String,
  enum: ['Si', 'No'],
},

en_que_institucion:{
  type: String,
  enum: ['IPN', 'UNAM', 'UAM', 'UTN', 'Otra'],
},
filename: {
  type: String
},

que_carrera_estudia: {
  type: String,
  maxlength : [ 50, 'La carrera no puede exceder los 50 caracteres'],
  minlength : [ 1, 'La carrera debe contener 6 o más caracteres'],
  match: [ /[a-zA-Z ]/, 'La carrera solo acepta letras' ],
  trim: true,
},

causas_por_las_que_trabaja:{
  type: String,
  enum: ['Para terminar mi carrera', 'Continuo mis estudios superiores', 'Ubicacion lejano del trabajo', 'La empresa ofrece salarios muy bajos', 'Otros'],
},

que_lugar_trabaja:{
  type      : String, 
  maxlength : [ 50, 'El lugar de trabajo no puede exceder los 50 caracteres'],
  minlength : [ 5, 'El lugar de trabajo debe contener 5 o más caracteres'],
  match: [ /[a-zA-Z ]/, 'El nombre del trabajo solo acepta letras' ],
  trim: true,
},

causas_por_las_que_no_trabajas_en_tu_perfil:{
  type      : String, 
  maxlength : [ 60, 'Las causas no pueden exceder los 60 caracteres'],
  minlength : [ 2, 'Las causas no pueden contener 2 o más caracteres'],
  match: [ /[a-zA-Z ]/, 'El nombre del trabajo solo acepta letras' ],
  trim: true,
},

    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
