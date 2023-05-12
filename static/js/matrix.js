 //creditos https://willianjusten.com.br/criando-o-efeito-da-chuva-do-matrix-com-javascript-puro
 
 const c = document.getElementById("matrix");

 const ctx = c.getContext("2d");

 c.height = window.innerHeight;
 c.width = window.innerWidth;

 const letters = [
   "1",
   "0",
 ];

 const fontSize = 24;

 const columns = c.width / fontSize;

 let drops = [];

 for (let x = 0; x < columns; x++) drops[x] = 1;

 function draw() {
   ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
   ctx.fillRect(0, 0, c.width, c.height);

   ctx.fillStyle = "#FFFFFF";
   ctx.font = `${fontSize}px arial`;

   for (let i = 0; i < drops.length; i++) {
     const text = letters[Math.floor(Math.random() * letters.length)];

     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

     if (drops[i] * fontSize > c.height && Math.random() > 0.975)
       drops[i] = 0;

     drops[i]++;
   }

   window.requestAnimationFrame(draw);
 }

 draw()

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-58087941-1', 'auto');
    ga('send', 'pageview');
    ga('send', 'event', 'labs', 'matrix');