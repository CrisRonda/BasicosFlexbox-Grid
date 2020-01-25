// Tareas de Gulp
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

function css() {
    return gulp.src("scss/app.scss")
        .pipe(autoprefixer({
            overrideBroserslist: ['last 2 versions'],
            cascade: false

        }))
        .pipe(sass({
            outputStyle: "expanded",
        }))
        .pipe(gulp.dest('css'))
}
function watchFiles() {
    gulp.watch("scss/*.scss", css)
}

//Registrar las tareas 
//Nombre - funcion
gulp.task('css', css)
gulp.task('watch', watchFiles)