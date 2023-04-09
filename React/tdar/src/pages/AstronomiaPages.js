import React from "react";
import NavMenu from "../components/NavMenu";
import { EncabezadoAstronomia } from "../components/Encabezados";
import Piefinal from "../components/PieFinal";

const AstronomiaPages = () => {
    return (
        <div id ="AstronomiaGeneral">
            <NavMenu />
            <EncabezadoAstronomia />

            <div class="accordion" id="accordionPanelsStayOpenExample">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Cuerpos Celestes
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            Los cuerpos celestes son todos los objetos naturales que forman parte del universo y que pueden interactuar con otro cuerpo, debido a la fuerza de gravedad.
                            <br />
                            <strong>Son cuerpos celestes:</strong> planetas, estrellas, constelaciones ,nebulosas, satélites naturales,cometas y meteoros.
                            <br />
                            Para poder saber mas del tema <a href="https://www.ecologiaverde.com/que-es-un-cuerpo-celeste-definicion-y-tipos-4163.html">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Galaxia
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Las galaxias son acumulaciones de gas, polvo y miles de millones de estrellas y sus sistemas solares, agrupadas gracias a la gravedad.
                            <br />
                            <strong>Tipos de galaxias </strong>Elípticas, Espiral e Irregulares
                            <br />
                            Para poder saber mas del tema <a href="https://spaceplace.nasa.gov/galaxy/sp/#:~:text=Una%20galaxia%20es%20un%20conjunto,negro%20supermasivo%20en%20el%20medio">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Via Láctea
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            La Vía Láctea es una galaxia, un enorme conjunto de polvo, gas y estrellas, incluyendo nuestro sol. La Tierra está situada dentro de esta galaxia, por lo que conocemos a la Vía Láctea como "nuestra" galaxia
                            <br />
                            Para poder saber mas del tema <a href="https://www.nationalgeographic.com.es/ciencia/actualidad/cosas-que-sabias-sobre-via-lactea_12295">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            Sistema Solar
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            El sistema solar es un sistema planetario. Un sistema planetario está constituido por una estrella (o en ocasiones un conjunto de estrellas) y los cuerpos celestes que giran a su alrededor, es decir, que se encuentran bajo la influencia de su campo gravitatorio, ya se trate de planetas con sus respectivas lunas, planetas menores, asteroides, cometas, o polvo estelar.
                            <br />
                            <strong>Nuestro sistema solar está formado por</strong> el sol, 8 planetas (mercurio, venus, tierra, marte, júpiter, saturno, urano, neptuno), 5 planetas enanos (Plutón, eris, makemake,ceres, haumea) y un montón de asteroides y cometas.
                            <br />
                            Para poder saber mas del tema <a href="https://www.nationalgeographic.com.es/ciencia/sistema-solar-que-es-como-se-formo-y-datos-principales_18430">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Estrellas
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Las estrellas son cuerpos celestes gigantes, compuestos principalmente por hidrógeno y helio, que producen luz y calor desde sus arremolinadas fundiciones nucleares. Es imposible saber cuántas estrellas hay, pero los astrónomos calculan que sólo en la galaxia de la Vía Láctea hay aproximadamente 300 mil millones.
                            <br />
                            <strong>Algunos tipos de estrellas son:</strong> enanas blancas, enanas marrones, gigantes rojas, supergigantes azules, estrellas de neutrones , supernovas.
                            <br />
                            Para poder saber mas del tema <a href="https://www.nationalgeographicla.com/espacio/2019/07/todo-lo-que-querias-saber-sobre-las-estrellas">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            Satelites naturales
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Un satélite natural es un cuerpo celeste que orbita alrededor de un planeta. Generalmente el satélite es más pequeño y acompaña al planeta en su órbita alrededor de su estrella madre.
                            <br />
                            <strong>Por ejemplo:</strong> la Luna es un satélite natural de la Tierra.
                            <br />
                            Para poder saber mas del tema <a href="https://elgranobservatorio.com/satelites-planetas/">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            Nebulosas
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Las nebulosas son grandes nubes formadas principalmente de gas y polvo. El gas que las forma es fundamentalmente hidrógeno y helio, pero no por ello las nebulosas son siempre iguales
                            <br />
                            <strong>Tipos de nebulosas en astronomía:</strong>
                            <br />
                            <strong>-Nebulosas de emisión:</strong> Las nebulosas de emisión son aquellas que brillan con luz propia. Son generalmente las más brillantes y espectaculares. Su forma es irregular, pero siempre aparecerán rodeadas de estrellas. Durante el verano es cuando podemos observar muchas más. Uno de los ejemplos más típicos es la Nebulosa del Omega, también conocida como Nebulosa del Cisne o M17.
                            <br />
                            <strong>-Nebulosas de reflexión:</strong> Las nebulosas de reflexión no reciben suficiente energía de las estrellas cercanas como para emitir luz propia. Sin embargo, sí que son capaces de reflejar la luz de las estrellas próximas. Estas nebulosas son generalmente de colores azulados, aunque también podemos encontrar nebulosas de reflexión de otros colores como en el caso de Rho Ophiuchi.
                            Este tipo de nebulosas no son tan brillantes, por lo que suelen resultar más difíciles de observar
                            <br />
                            <strong>-Nebulosas de emisión y reflexión</strong> En ocasiones puede haber nebulosas que entren en dos o más categorías. Un ejemplo muy claro es la nebulosa de Orión, que combina regiones de emisión y de reflexión. El centro de la nebulosa es iluminada por las estrellas jóvenes que forman el conocido “trapecio”, mientras que el resto de la nebulosa emite luz propia.
                            <br />
                            <strong>-Nebulosas oscuras o de absorción</strong> Las nebulosas oscuras no están asociadas a ninguna estrella. Por tanto, no están ionizadas ni reflejan la luz de ningún astro. Así pues, una nebulosa oscura es una zona de gas y polvo interestelar que no brilla ni emite luz. A través del telescopio aparecerá como una región oscura que oculta las estrellas o el gas que tiene detrás.
                            Una de las nebulosas de absorción más conocidas es la nebulosa Cabeza de Caballo
                            <br />
                            <strong>-Nebulosas planetarias</strong> Las nebulosas planetarias son muy diferentes al resto de nebulosas debido a su origen. Sin embargo, son nebulosas de emisión, ya que la nube de gas brilla por sí misma al estar ionizada por la energía que emite los restos (enana blanca) de la estrella que las genera.
                            Estas nebulosas son mucho más pequeñas y menos brillantes. Su nombre puede llevar a confusión, ya que la única relación con los planetas es que a través del telescopio suelen verse con formas redondas y de pequeño tamaño, siendo similares a un planeta.
                            Ejemplos  La nebulosa del ojo de gato, la del esquimal, la hélice,  M57 la Nebulosa del Anillo
                            <br />
                            Para poder saber mas del tema <a href="https://spaceplace.nasa.gov/nebula/sp/#:~:text=formarse%20nuevas%20estrellas.-,Una%20nebulosa%20es%20una%20nube%20gigante%20de%20polvo%20y%20gas,comienzan%20a%20formarse%20nuevas%20estrellas">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                            Planetas
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Un planeta es un cuerpo celeste que: Órbita alrededor del Sol, Posee suficiente masa como para que su propia gravedad domine las fuerzas presentes como cuerpo rígido, lo que implica una forma aproximadamente redondeada determinada por el equilibrio hidrostático, Es el objeto claramente dominante en su vecindad, habiendo limpiado su órbita de cuerpos similares a él.
                            <br />
                            La clasificación más aceptada es la siguiente
                            <br />
                            <strong>1- Por su composición</strong>
                            <br />
                            -Planetas rocosos : también denominados telúricos o terrestres, son cuerpos de densidad elevada, formados principalmente por materiales rocosos y metálicos, con una estructura interna bien definida y con un tamaño relativamente similar, entre estos se encuentra Mercurio, Venus, Tierra, Marte y Plutón.
                            <br />
                            -Planetas gaseosos: caracterizados por sus densas atmósferas, por rápido movimiento de rotación, inmensos campos magnéticos, con muchos satélites y sistemas de anillos, por ejemplo Júpiter , Saturno, Urano y Neptuno
                            <br />
                            <strong>2- Por su distancia al sol</strong>
                            <br />
                            -Planetas interiores : los que se encuentran antes del cinturón de asteroides como Mercurio, venus, Tierra , Marte
                            <br />
                            -Planetas exteriores: Los que se encuentran después del cinturón de asteroides como Júpiter, SAturno, Urano, Neptuno y plutón
                            <br />
                            Para poder saber mas del tema <a href="https://www.astromia.com/solar/planetas.htm">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                            Asteroides
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Un asteroide es un tipo de roca espacial, mucho más pequeño que un planeta, y se traslada en órbita elíptica alrededor del Sol. Existen millones de asteroides y la mayoría de ellos se encuentran en el denominado “cinturón de asteroides”
                            <br />
                            Tipos de asteroides:
                            <br />
                            <strong>1- Los asteroides del Cinturón de asteroides:</strong> Son los que orbitan en el espacio o frontera, entre Marte y Júpiter. El cinturón conglomera a la mayoría de los asteroides del Sistema Solar.
                            <br />
                            <strong>2- Los asteroides Centauros:</strong> Son los que orbitan en la frontera entre Júpiter o Saturno, y entre Urano o Neptuno, respectivamente.
                            <br />
                            <strong>3- Los asteroides Troyanos:</strong> Son los que comparten la órbita de un planeta, pero no suelen impactar.
                            <br />
                            <strong>4- Los asteroides Amor:</strong> Aquellos que cruzan la órbita de Marte.
                            <br />
                            <strong>5- Los asteroides Apolo:</strong> Aquellos que cruzan la órbita de la Tierra y por eso resultan una relativa amenaza (a pesar del bajo riesgo de impacto).
                            <br />
                            <strong>6- Los asteroides Atón:</strong> Aquellos que cruzan, de manera parcial, la órbita de la Tierra.
                            <br />
                            Para poder saber mas del tema <a href="https://spaceplace.nasa.gov/asteroid/sp/">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                            Cometas
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Los cometas son objetos espaciales compuestos por hielo y otros elementos congelados en su núcleo. Entre ellos, la NASA destaca el hidrógeno, el dióxido de carbono y el agua como sus componentes más comunes
                            <br />
                            <strong>Tipos de cometas:</strong>
                            <br />
                            -Cometas enanos: Entre 0 y 1,5 kilómetros de diámetro.
                            -Cometas pequeños: Entre 1,5 y 3 kilómetros de diámetro.
                            -Cometas medianos: Entre 3 y 6 kilómetros de diámetro.
                            -Cometas grandes: Entre 6 y 10 kilómetros de diámetro.
                            -Cometas gigantes: Entre 10 y 50 kilómetros de diámetro.
                            <br/>
                            Para poder saber mas del tema <a href="https://www.sea-astronomia.es/glosario/cometa#:~:text=Los%20cometas%20(del%20griego%20kometes,%C2%ABbolas%20de%20hielo%20sucio%C2%BB.">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                            Meteoritos, Meteoro y Meteoroides
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <strong>Meteoroides:</strong>
                            Son restos pequeños de roca y metal. Pedazos que suelen ser de asteroides, cometas y raramente de la luna de Marte. La gravedad terrestre arrastra a millones de meteoroides. La mayoría se vaporizan al llegar a nuestra atmósfera dejando un rastro visible de polvo brillante al que popularmente se le llama “estrella fugaz”.
                            <br />
                            <strong>Meteoritos:</strong>
                            Son meteoroides que consiguen cruzar la atmósfera terrestre y llegar a tierra.
                            <br />
                            <strong>Meteoro:</strong>
                            es el fenómeno luminoso que se produce por la ionización del aire cuando los meteoroides son atraídos por la gravedad terrestre y entran en contacto con la atmósfera. El fenómeno también se conoce como “estrella fugaz”.
                            <br />
                            Para poder saber mas del tema <a href="https://www.nationalgeographic.es/espacio/meteoroides-meteoros-y-meteoritos#:~:text=Los%20meteoritos%20son%20meteoroides%20que,en%20contacto%20con%20la%20atm%C3%B3sfera.">"Pincha aqui"</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
                            Eclipses
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Un eclipse se produce cuando un planeta o una luna se interpone en el camino de la luz del sol. Aquí en la Tierra, podemos experimentar dos clases de eclipses:
                            <br />
                            <strong>Eclipse solar:</strong>
                            <br />
                            Un eclipse solar se produce cuando la luna se interpone en el camino de la luz del sol y proyecta su sombra en la Tierra. Eso significa que durante el día, la luna se mueve por delante del sol y se pone oscuro
                            <br />
                            <strong>Eclipse lunar:</strong>
                            <br />
                            Durante un eclipse lunar, la Tierra impide que la luz del sol llegue hasta la luna. Eso quiere decir que a la noche, la luna llena desaparece por completo, a medida que la sombra de la Tierra la cubre.
                            <br />
                            Para poder saber mas del tema <a href="https://spaceplace.nasa.gov/eclipses/sp/#:~:text=Un%20eclipse%20se%20produce%20cuando,eclipses%20solares%20y%20eclipses%20lunares.">"Pincha aqui"</a>
                            
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseThirteen">
                            Constelaciones
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThirteen" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Las constelaciones son un grupo de estrellas concretas y que son observadas en el cielo nocturno en un aparente estado estático e invariable que las relaciona como una única unidad. Estas estrellas, forman figuras imaginarias entre sí mediante la unión de sus estrellas gracias a segmentos imaginarios que permiten asemejarlas a formas reconocibles por la mente humana
                            Las constelaciones se clasifican en cuatro grupos distintos. Así, existen las constelaciones boreales, australes, zodiacales y ecuatoriales.
                            Actualmente se consideran 88 constelaciones. Algunas son visibles desde ambos hemisferios terrestres y otras solo pueden observarse desde uno de ellos.
                            <br />
                            <strong>Las constelaciones más antiguas:</strong> 
                            <br />
                            Leo, Scorpius, Taurus, Andrómeda, Aquarius, Aquila, Ara, Aries, Auriga, Bootes, Cáncer, Canis Major, Canis Minor, Capricornus, Casiopea, Centaurus, Cefeo, Cetus, Corona Australis, Corona Borealis, Corvus, Cráter, Cygnus, Delphinus, Draco, Equuleus, Eridanus, Gemini, Hércules, Hydra, Lepus, Libra, Lupus, Lyra, Ophiuchus, Orion, Pegaso, Perseo, Pisces, Piscis Austrinus, Sagitta, Sagittarius, Serpens, Triangulum, La osa mayor, Ursa minor, Virgo.
                            <br />
                            <strong>Las constelaciones descubiertas durante los siglos XVI y XVII:</strong> 
                            <br />
                            Crux, Triangulum Australe, Coma Berenices, Columba, Apus, Chamaeleon, Dorado, Grus, Hydrus, Indus, Musca, Pavo, Phoenix, Tucana, Volans, Camelopardalis, Monoceros, Canes Venatici, Lacerta, Leo Minor, Lynx, Scutum, Sextans, Vulpecula, Antlia, Caelum, Carina, Circinus, Fornax, Horologium, Mensa, Microscopium, Norma, Octans, Pictor, Puppis, Pyxis, Reticulum, Sculptor, Telescopium, Vela.
                            <br /> 
                            Para poder saber mas del tema <a href="https://www.planetario.net/constelaciones/">"Pincha aqui"</a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Piefinal />
        </div>
    )
}

export default AstronomiaPages;
