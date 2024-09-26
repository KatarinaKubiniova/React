import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {Text} from "react-native";
import React from "react";
import * as RNLocalize from 'react-native-localize';

// the translations
const resources = {
    sk: {
        translation: {
            'Learn your BMI index': 'Zistite si BMI index',
            'The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.': 'BMI idex (Body mass index) je meranie, ktoré používa vašu váhu a výšku na zistenie, či je vaše telo zdravé.',
            'Weight': 'Váha',
            'Height': 'Výška',
            'Submit': 'Potvrdiť',
            'Your BMI index:': 'Váš BMI index:',
            'Weight Status': 'Váš stav',
            'Underweight': 'Podváha',
            'Healthy Weight': 'Zdravá váha',
            'Overweight': 'Nadváha',
            'Obesity': 'Obezita',


            'Stay fit': 'Ostaň fit',
            'This App will help you watching your calories and follow dietary plans.' : 'Aplikácia pomôže so sledovaním jedálnička a dodržiavaniu plánov v stravovaí.',
            'Good luck!': 'Veľa šťastia!',
            'Daily calories' : "Jedálniček",
            'Recipes': 'Recepty',
            'Your meals': 'Vlastné jedlá',


            'Plan daily calories intake in 2 steps!': "Plánujte jedálniček v 2 krokoch!",
            '1. Choose day in calendar':"1. Vyberte deň v kalendári",
            '2. Write meal + calories':"2. Zaznačte jedlo + kalórie.",
            "Picked date:": "Vybraný dátum:",
            "Meal: ": "Jedlo:",
            "Number of calories:": "Počet kalórií:",
            "Meal": "Jedlo",
            "Number of calories": "Počet kalórií",


            'Have your own FIT recepies': "Majte svoje vlastné fit recepty",
            'Write your recipe and take a photo of your meal!' : "Zapíšte svoj recept a urobte fotografiu vášho jedla!",
            "Name: ": "Názov:",
            "Ingredients: ": "Ingrediencie:",
            "Instructions: ": "Inštrukcie:",
            "Take photo": "Urobiť fotografiu",
            "or": "alebo",
            "Pick photo from gallery": "Vybrať fotografiu z galérie",
            "Save recipe": "Uložiť recept",
            "**Show my fit recipes**": "**Ukázať moje fit recepty**",


            "Fit recipes": "Fit recepty",
            "for inspiration": "na inšpiráciu",
            "Search recipes by category.": "Hľadajte recept podľa kategórie.",
            "Categories: ": "Kategórie:",
            "Seafood": "Morské jedlo",
            "Chicken": "Kurča",
            "Beef": "Hovädzie",
            "Pork": "Bravčové",
            "Breakfast": "Raňajky",
            "Dessert": "Dezert",
            "Pasta": "Cestoviny",

            'Baked salmon with fennel & tomatoes': "Pečený losos s feniklom a paradajkami",
            "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.": "Rúru vyhrejeme na 180 °C/teplotná rúra 160 °C/plynová rúra. Z feniklu odrežeme lístky a odložíme nabok. Hľuzovky feniklu prekrojíme na polovicu, každú potom nakrájame na 3 kolieska. Varíme vo vriacej osolenej vode 10 minút, potom dobre scedíme. Feniklové lístky nasekajte nahrubo, potom zmiešajte s petržlenovou vňaťou a citrónovou kôrou.\r\n\r\nScedený fenikel rozložte na plytkú nádobu určenú na pečenie, pridajte paradajky. Pokvapkajte olivovým olejom a pečte 10 minút. Lososa uložte medzi zeleninu, pokvapkajte citrónovou šťavou a pečte ešte 15 minút, kým nebude ryba uvarená. Posypte petržlenovou vňaťou a podávajte.",
            "Fennel":"Fenikel",
            "Parsley":"Petržlen",
            "Lemon":"Citrón",
            "Cherry Tomatoes":"Cherry paradajky",
            "Olive Oil":"Rastlinný olej",
            "Salmon":"Losos",
            "Black Olives":"Čierne olivy",
            "2 medium":"2 strednej veľkosti",
            "2 tbs chopped":"kávové lyžičky, nasekať",
            "Juice of 1":"šťava z 1",
            "1 tbs":"1 kávová lyžička",
            "to serve":"podľa chuti",

            "Cajun spiced fish tacos": "Rybie tacos s kajúnskym korením",
            "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery.\r\n\r\nOn a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.\r\n\r\nHeat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.\r\n\r\nMeanwhile, prepare the dressing by combining all the ingredients with a little seasoning.\r\nSoften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing.":"Varením v marináde z kajenského korenia je táto ryba mimoriadne šťavnatá a chutná. Polejte pikantným dresingom a podávajte v tortille ako rýchly a nenáročný hlavný pokrm.\r\n\r\nNa veľkom tanieri zmiešajte kajenské korenie s trochou korenia a použite na obaľovanie rýb, ktoré obaľujte po celej ploche.\r\n\r\nNa panvici rozohrejte trochu oleja, pridajte rybu a na miernom ohni opečte do zlatista. Znížte oheň a pokračujte v smažení, kým sa ryba neuvarí, asi 10 minút. Ak nemáte na panvici dosť miesta, varte po dávkach.\r\n\r\nMedzitým si pripravte dresing zmiešaním všetkých ingrediencií s trochou korenia.\r\nTortilly nechajte zmäknúť ohrievaním v mikrovlnnej rúre na 5-10 sekúnd. Naukladajte s avokádom, šalátom a jarnou cibuľkou, pridajte lyžicu salsy, posypte veľkými vločkami ryby a pokvapkajte dresingom .",
            "cajun":"kajúnske korenie",
            "cayenne pepper":"korenie cayenne",
            "white fish":"biela ryba",
            "vegetable oil":"olivový olej",
            "flour tortilla":"celozrná tortila",
            "avocado":"avokádo",
            "little gem lettuce":"hlávkový šalát",
            "spring onion":"jarná cibuľka",
            "salsa":"salsa",
            "sour cream":"kyslá smotana",
            "lemon":"citrón",
            "garlic":"cesnak",
            "2 tbsp":"2 polievkové lyžice",
            "1 tsp":"1 kávová lyžička",
            "4 fillets":"4 filety",
            "1 sliced":"1 pokrájať",
            "2 shredded":"2 posekať",
            "4 shredded":"4 posekať",
            "1 pot":"1",
            "1 clove finely chopped":"1 hlavička najemno nakrájať",

            "Escovitch Fish":"Ryba Escovitch",
            "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.":"Rybu opláchnite; potrite citrónom alebo limetkou, ochuťte soľou a korením alebo použite svoje obľúbené korenie. Ja som použil kreolské korenie. Odložte alebo vložte do rúry, aby zostala teplá, kým nebude hotová omáčka.\r\n\r\nVo veľkej panvici rozohrejte olej na strednom plameni, kým nie je horúci, pridajte rybu, opečte z každej strany - asi 5-7 minút, kým nebude uvarená a chrumkavá z oboch strán. Vyberte rybu a odložte. Olej sceďte a nechajte asi 2-3 polievkové lyžice oleja.\r\nPridajte bobkový list, cesnak a zázvor, za stáleho miešania opekajte asi minútu, aby sa cesnak nepripálil\r\nPotom pridajte cibuľu, papriku, tymian, škótsku karamelku, cukor, všetko korenie - miešajte ďalej asi 2-3 minúty. Pridáme ocot, primiešame soľ a korenie podľa chuti. Necháme ešte asi 2 minúty podusiť. \r\n\r\nVyhoďte bobkový list a podávajte s prílohou k rybe bammy. Omáčku si môžete pripraviť asi 2 dni vopred.",
            "Red Snapper":"Chňapal červený",
            "Ginger":"Zázvor",
            "Garlic":"Cesnak",
            "Thyme":"Tymián",
            "Bay Leaf":"Bobkový list",
            "Red Pepper":"Červená paprika",
            "Yellow Pepper":"Žltá paprika",
            "Onion":"Cibuľa",
            "Carrots":"Mrkva",
            "Sugar":"Cukor",
            "Allspice":"Nové korenie",
            "Worcestershire Sauce":"Worcesterchire omáčka",
            "2 Pounds":"500 gramy",
            "1/2 cup ":"1/2 hrnčeka",
            "1 clove peeled crushed":"1 hlávka, olúpaná, popučená",
            "1/2 tsp":"1/2 čajovej lyžičky",
            "2 sprigs":"2 vetvičky",
            "1 chopped":"1 posekať",
            "1 tsp ":"1 polievková lyžica",

            "Fish fofos":"Fofos z rýb",
            "STEP 1\r\n\r\nPut the fish into a lidded pan and pour over enough water to cover. Bring to a simmer and gently poach for 10 minutes over a low heat with the lid on. Drain and flake the fish.\r\n\r\nSTEP 2\r\n\r\nPut the fish, potato, green chilli, coriander, cumin, black pepper, garlic and ginger in a large bowl. Season, add the rice flour, mix well and break in 1 egg. Stir the mixture and divide into 15, then form into small logs. Break the remaining eggs into a bowl and whisk lightly. Put the breadcrumbs into another bowl. Dip each fofo in the beaten egg followed by the breadcrumb mixture. Chill for 20 minutes.\r\n\r\nSTEP 3\r\n\r\nHeat 1cm of oil in a large frying pan over a medium heat. Fry the fofos in batches for 2 minutes on each side, turning gently to get an even golden brown colour all over. Drain on kitchen paper and repeat with the remaining fofos.\r\n\r\nSTEP 4\r\n\r\nFor the onion salad, mix together the onion, coriander and lemon juice with a pinch of salt. Serve with the fofos and mango chutney.":"KROK 1\r\n\r\nRybu vložte do panvice s vekom a zalejte dostatočným množstvom vody, aby bola zakrytá. Priveďte do varu a na miernom ohni, pod pokrievkou zľahka povarte 10 minút. Rybu sceďte a nastrúhajte na vločky. \r\n\r\nKROK 2\r\n\r\nDo veľkej misy dáme rybu, zemiaky, zelené čili, koriander, rascu, čierne korenie, cesnak a zázvor, okoreníme, pridáme ryžovú múku, dobre premiešame a rozbijeme 1 vajce. Zmes premiešajte a rozdeľte na 15 častí, potom vytvarujte malé guľôčky. Zvyšné vajcia rozbite do misky a zľahka rozšľahajte. Do inej misky dajte strúhanku. Každé fofo namočte do rozšľahaného vajca a následne do strúhankovej zmesi. Ochlaďte 20 minút.\r\n\r\n3. KROK\r\n\r\nVo veľkej panvici zohrejte na strednom ohni 1 cm oleja. Fofos opekajte po dávkach 2 minúty z každej strany a jemne otočte, aby ste získali rovnomernú zlatohnedú farbu po celom povrchu. Nechajte odkvapkať na kuchynskom papieri a opakujte so zvyšným fofosom.\r\n\r\nKROK 4\r\n\r\nNa cibuľový šalát zmiešajte cibuľu, koriander a citrónovú šťavu so štipkou soli.Podávame s fofos a mangom.",
            "Haddock":"treska jednoškvrnná",
            "Potatoes":"zemiaky",
            "Green Chilli":"zelené čilly",
            "Coriander":"koriander",
            "Cumin Seeds":"semenná z rasce",
            "Pepper":"čierne korenie",
            "Flour":"múka",
            "Eggs":"vajíčka",
            "Breadcrumbs":"strúhanka",
            "3 tbs":"3 polievkové lyžice",
            "3 cloves":"3 hlávky",
            "2 pieces ":"2 kúsky",
            "2 tbs":"2 polievkové lyžice",
            "For frying":"na vyprážanie",
            "Vegetable Oil": "rastlinný olej",

            "Fish pie":"Rybí koláč",
            "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.":"01. Zemiaky vložte do veľkej panvice so studenou osolenou vodou a priveďte do varu. Znížte teplotu, prikryte a potom jemne varte 15 minút, kým nezmäknú. Sceďte a potom vráťte na panvicu na mierny oheň na 30 sekúnd, aby ste odstránili prebytočnú vodu. Roztlačte s 1 polievkovou lyžicou olivového oleja, potom ochuťte.\r\n02.Medzitým si dajte mlieko do veľkej panvice, pridajte rybu a priveďte do varu. Odstavte z ohňa, prikryte a odstavte na 3 minúty. Vyberte rybu (mlieko si nechajte) a osušte kuchynským papierom, potom jemne vložte do pekáča, pričom kožu a kosti odstráňte.\r\n03.Na panvici zohrejte zvyšný olej, vmiešajte múku a varíme 30 sekúnd.Postupne vmiešame 200-250ml odloženého mlieka (zvyšok vyhodíme).Nastrúhame muškátový oriešok,okoreníme,potom prebublávame do zhustnutia.Primiešame smotanu.\r\n04.Rúru predhrejeme na 190°C/teplovzdušnú 170°C/plynovú. Artičoky nastrúhame a pridáme k jedlu s pórom, krevetami a bylinkami. Do omáčky vmiešame citrónovú kôru a šťavu, potom prelejeme. Jemne premiešame drevenou vareškou.\r\n05.Na rybaciu zmes naneste lyžicou kašu, potom pomocou vidličky vytvorte vrcholy, ktoré budú pri varení chrumkavé a hnedé. Posypte syrom a pečte 35-40 minút, kým nezozlatne a nebude bublať. Podávame s upečenou zeleninou.",
            "Floury Potatoes":"zemiaky",
            "Semi-skimmed Milk":"polotučné mlieko",
            "White Fish Fillets":"Biele rybie filety",
            "Plain flour":"Polohrubá múka",
            "Nutmeg":"muškátový oriešok",
            "Double Cream":"Smotana na varenie",
            "Jerusalem Artichokes":"Jeruzalemské artičoky",
            "Leek":"Pór",
            "Prawns":"krevety",
            "Dill":"kôpor",
            "Gruyère":"syr Gruyère",
            "1 tbsp":"1 polievková lyžica",
            "Grating":"nasekať",
            "3 tbsp":"3 polievkové lyžice",
            "1 finely sliced":"1 drobno nasekať",
            "200g peeled raw":"200 g, surové, olúpať",
            "Large handful":"za väčšej hrste",
            "Handful":"za hrste",
            "Grated zest of 1":"nastrúhaná kôra z 1",
            "25g grated":"25 g nasekať",

        }
    }
};

RNLocalize.addEventListener('change', () => {
    const language = RNLocalize.getLocales()[0].languageCode;
    console.log(`>> language has been changed to ${language}`);
    i18n.changeLanguage(language);
});

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: RNLocalize.getLocales()[0].languageCode,
        compatibilityJSON: 'v3',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
