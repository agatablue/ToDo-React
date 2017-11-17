var gulp = require('gulp'); // ZAŁACZANIE GULPA
var sass = require('gulp-sass') // ZAŁĄCZANIE PACZKI SASS, która kompiluje sasy (scss do css)
var sourceMaps = require('gulp-sourcemaps'); // ZAŁĄCZENIE PACZKI SOURCEMAPS



//ZADANIE SASS - zamienia scss na css
gulp.task ('sass', function() {
    return gulp.src('*.scss') // wskazujemy skąd brać pliki scss - /**/ ze wszystkich podfolderach *.scss - wszystkie *.scss
        .pipe(sourceMaps.init()) //zaczyna działanie sourcemaps
        .pipe(sass({
            outputStyle: 'expanded'
        })) //wywołanie funkcji sass (zdefiniowanej w linijce 2) która kompiluje jw; pipe określa koleność
        .on('error', sass.logError)//wyrzuca error do konsoli
        .pipe(sourceMaps.write()) //wypisuje source maps w rzeglądarce
        .pipe(gulp.dest('css')) //przeznaczenie do którego wklejamy skompilowane css-y (folder, nazwa pliku będzie zbieżna z nazwą pliku scss)
});


//zadanie poniżej które umożliwia najpier preprocesowanie plików
//a poóźniej włącza watchera
gulp.task ('default', function() {
    gulp.start('sass');
    gulp.watch('*.scss', ['sass']) // przy każdym zapisaniu pliku *.scss uruchamia zadanie sass
}) //Zadzaiała doiero jak się wywoła gulp (bo nazwa tasku to default)