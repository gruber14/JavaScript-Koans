//var paths= ['about_asserts.js', 'about_operators.js', 'about_equality.js', 'about_truthyness.js', 'about_assignment.js', ]

var paths= ['asserts', 'operators', 'equality', 'truthyness', 'assignment', 'control_structures', 'strings', 'numbers', 'objects', 'arrays', 'reflection', 'prototype_chain', 'prototypal_inheritance', 'functions_and_closure', 'this', 'scope', 'regular_expressions'];

var funcion;

paths.forEach((nombre) => {
    funcion= require('./about_'+nombre+'.js');
    funcion();
});
//console.log("termine");
/*
var funcion= require('./about_asserts.js')
funcion()
funcion= require('./about_operators.js')
funcion()
funcion= require('./about_equality.js')
funcion()
funcion= require('./about_truthyness.js')
funcion()
funcion= require('./about_assignment.js')
funcion()
funcion= require('./about_control_structures.js')
funcion()
funcion= require('./about_strings.js')
funcion()
funcion= require('./about_numbers.js')
funcion()
funcion= require('./about_objects.js')
funcion()
funcion= require('./about_arrays.js')
funcion()
funcion= require('./about_reflection.js')
funcion()
funcion= require('./about_prototype_chain.js')
funcion()
funcion= require('./about_prototypal_inheritance.js')
funcion()
funcion= require('./about_functions_and_closure.js')
funcion()
funcion= require('./about_this.js')
funcion()
funcion= require('./about_scope.js')
funcion()
funcion= require('./about_regular_expressions.js')
funcion()*/