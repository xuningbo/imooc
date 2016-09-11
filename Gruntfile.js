module.exports=function(grunt){

grunt.initConfig(
{

  pkg:grunt.file.readJSON('package.json'),
  watch:{
  files:['<%= jshint.files %>'],
  tasks:['jshint',' qunit']

},

qunit:{
files:['views/*.html']
},

jshint:{
  files:['views/**/*.js'],
  options:{
    globals:{
      jQuery:true,
      console:true,
      module:true,
      document:true
 }
}

},


});


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');


grunt.registerTask('default',['watch','jshint','qunit']);
}
