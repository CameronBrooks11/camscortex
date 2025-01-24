- README
  collapsed:: true
	- Get the full scoop at [NaturalEarthData.com](http://naturalearthdata.com)
	  
	  _No, really! This readme is a poor substitute for the live site._
	- # About Natural Earth Vector
	  
	  Natural Earth is a public domain map dataset available at 1:10m, 1:50m, and 1:110 million scales. Featuring tightly integrated vector (here) and raster data ([over there](https://github.com/nvkelso/natural-earth-raster)), with Natural Earth you can make a variety of visually pleasing, well-crafted maps with cartography or GIS software.
	  
	  Natural Earth was built through a collaboration of many [volunteers](http://www.naturalearthdata.com/about/contributors/) and is supported by [NACIS](http://www.nacis.org/) (North American Cartographic Information Society), and is free for use in any type of project (see our [Terms of Use](http://www.naturalearthdata.com/about/terms-of-use/) page for more information).
	  
	  [Get the Data »](http://www.naturalearthdata.com/downloads)
	  
	  ![Convenience](http://www.naturalearthdata.com/wp-content/uploads/2009/08/home_image_11.png)
	- # Convenience
	  
	  Natural Earth solves a problem: finding suitable data for making small-scale maps. In a time when the web is awash in geospatial data, cartographers are forced to waste time sifting through confusing tangles of poorly attributed data to make clean, legible maps. Because your time is valuable, Natural Earth data comes ready-to-use.
	  
	  ![Neatness Counts](http://www.naturalearthdata.com/wp-content/uploads/2009/08/home_image_21.png)
	- # Neatness Counts
	  
	  The carefully generalized linework maintains consistent, recognizable geographic shapes at 1:10m, 1:50m, and 1:110m scales. Natural Earth was built from the ground up so you will find that all data layers align precisely with one another. For example, where rivers and country borders are one and the same, the lines are coincident.
	  
	  ![GIS Atributes](http://www.naturalearthdata.com/wp-content/uploads/2009/08/home_image_32.png)
	- # GIS Attributes
	  
	  Natural Earth, however, is more than just a collection of pretty lines. The data attributes are equally important for mapmaking. Most data contain embedded feature names, which are ranked by relative importance. Other attributes facilitate faster map production, such as width attributes assigned to river segments for creating tapers.
	- # Versioning
	  
	  The 2.0 release in 2012 marked the project's shift from so-called marketing versions to [semantic versioning](http://semver.org/). 
	  
	  Natural Earth is a big project with hundreds of files that depend on each other and the total weighs in at several gigabytes. SemVer is a simple set of rules and requirements around version numbers. For our project, the data layout is the API. 
	  
	  * **Version format of X.Y.Z** (Major.Minor.Patch). 
	  * **Backwards incompatible** changes, increment the major version X.
	  * **Backwards compatible** additions/changes, increment the minor version Y
	  * **Bug fixes** not affecting the file and field names, patch version Z will be incremented. 
	  
	  Major version increments:
	  
	  * Changing existing data **file names**
	  * Changing existing data **column (field) names**
	  * Removing **`FeatureCla` field attribute values**
	  * Additions, deletions to **admin-0**
	  * Introduce **significant new themes**
	  
	  Minor version increments:
	  
	  * Any shape or attribute change in **admin-0**
	  * Additions, deletions, and any shape or attribute changes in **admin-1**
	  * Additions, deletions to **any theme**
	  * Major shape or attribute changes in **any theme**
	  * Adding, changing **`FeatureCla` field attribute values**
	  * Introduce **minor new themes**
	  
	  Patch version increments:
	  
	  * Minor shape or attribute changes in **any theme**
	  * Bug fixes to shape, attributes in **any theme**
	  
	  Under this scheme, version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next.
	  
	  When we introduce a new version of Natural Earth, you can tell by the version number how much effort you will need to extend to integrate the data with your map implementation.
	  
	  * **Bug fixes Z**: can simply use the new data files, replacing your old files.
	  * **Minor version Y**: limited integration challenges.
	  * **Major version X**: significatnt integration challenges, either around changed file strucutre, field layout, field values like `FeatureCla` used in symbolizing data, or significant new additions or significant changes to existing themes.
	- # &etc
	  
	  Natural Earth is maintained by Nathaneiel V. KELSO ([@nvkelso](https://github.com/nvkelso/)) and Tom Patterson.
	  
	  The project transitioned to Github in 2012. Versioned files are here to collaborate around. The frontend still lives at [NaturalEarthData.com](http://naturalearthdata.com).
- Localization
	- # Localization
	  
	  The Natural Earth Quick Start for QGIS project includes multiple localization options
	  including for names used in text labels; boundary lines for admin-0, admin-1 and disputed
	  regions; and country polygons used for [choropleth mapping](https://en.wikipedia.org/wiki/Choropleth_map).
	  
	  To change the QGIS project variables, use the `Project > Properties` menu item and choose
	  `Variables` in the left table of contents. Scroll down to the bottom of the list to find
	  the following Natural Earth specific variables:
	  
	  ![QGIS project properties - variable](images/qgis-project-properties-variables-natural-earth.png)
	  
	  The sections below explain each variable and available values. The values power functions
	  used in data driven labeling and styling in the QGIS project.
	- ## Setting Names Localization
	  
	  Natural Earth includes name localizations for 26 languages across several dozen themes
	  including populated places, all admin-0, admin-1, rivers, lakes, playas, geographic lines,
	  physical labels, parks, and airports (since version 4).
	  
	  The QGIS project includes the following variables:
	- `project_language` (default: `name_en`)
	- `project_language_fallback` (default: `name`)
	  
	  The following Natural Earth property names can be used to specify the labeling language:
	  
	  | Language |  Native name | NE property | [ISO 639-2 code](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes) | [ISO_639-1 code](https://en.wikipedia.org/wiki/ISO_639-1) |
	  |--------|-----------------|-----------|-----|----|
	  | Arabic | اَلْعَرَبِيَّةُ | `name_ar` | ara | ar |
	  | Bengali | বাংলা | `name_bn` | ben | bn |
	  | German | Deutsch | `name_de` | deu | de |
	  | English | English | `name_en` | eng | en |
	  | Spanish | español | `name_es` | spa | es |
	  | Farsi | فارسی | `name_fa` | fas | fa |
	  | French | français | `name_fr` | fra | fr |
	  | Greek | Νέα Ελληνικά | `name_el` | ell | el |
	  | Hebrew | עברית | `name_he` | heb | he |
	  | Hindi | हिन्दी | `name_hi` | hin | hi |
	  | Hungarian	| magyar | `name_hu` | hun | hu |
	  | Indonesian | bahasa Indonesia | `name_id` | ind | id |
	  | Italian | italiano | `name_it` | ita | it |
	  | Japanese | 日本語 | `name_ja` | jpn | ja |
	  | Korean | 한국어 | `name_ko` | kor | ko |
	  | Dutch | Nederlands | `name_nl` | nld | nl |
	  | Polish | Język polski | `name_pl` | pol | pl |
	  | Portuguese | português | `name_pt` | por | pt |
	  | Russian | русский язык | `name_ru` | rus | ru |
	  | Swedish | svenska | `name_sv` | swe | sv |
	  | Turkish | Türkçe | `name_tr` | tur | tr |
	  | Ukrainian | Українська мова | `name_uk` | ukr | uk |
	  | Urdu | اُردُو | `name_ur` | urd | ur |
	  | Vietnamese | Tiếng Việt | `name_vi` | vie | vi |
	  | Chinese simplified | 中文 汉语 | `name_zhs` | zho  | zh |
	  | Chinese traditional | 中文 漢語 | `name_zht` | zho  | zh |
	  
	  A full 2-character language code decoder ring is
	  [available](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes).
	  
	  Each Natural Earth release name localizations are collected from Wikidata via the
	  wikidataid concordance value on the Natural Earth feature. If you see a localized name
	  that is missing or in error, please fix the corresponding Wikidata record and file a
	  Github issue noting the change and asking for the script to be re-run.
	  
	  Many thanks to [Wikidata](https://www.wikidata.org/wiki/Wikidata:Introduction) for
	  their CC0 license!
	- ## Setting Boundary POV
	  
	  Natural Earth includes support for defacto and alternate points of view
	  (aka worldview) with different admin-0 `fclass_*` properties (like `fclass_iso`). The
	  QGIS project includes a data driven toggle for adjusting the point-of-view for country,
	  map units, state and provinces, and disputed boundaries (since version 5).
	  
	  The QGIS project includes the following variables:
	- `project_pov` (default: `fclass`)
	- `project_pov_fallback` (default: `fclass`)
	  
	  The following country and international organizations worldviews are supported:
	  
	  | Country | Native name | NE property | Recommended name pairing |
	  |---------|-------------|------------------|--------------------------|
	  | Argentina | Argentina | `fclass_ar` | `name_es` |
	  | Bangladesh | বাংলাদেশ | `fclass_bd` | `name_bn` |
	  | Brazil | Brasil | `fclass_br` | `name_pt` |
	  | China | 中国 | `fclass_cn` | `name_zhs` |
	  | Egypt | مصر | `fclass_eg` | `name_ar` |
	  | France | France |`fclass_fr` | `name_fr` |
	  | Germany | Deutschland | `fclass_de` | `name_de` |
	  | Greece | Ελλάς | `fclass_gr` | `name_el` |
	  | India | भारत | `fclass_in` | `name_hi` |
	  | Indonesia | Indonesia | `fclass_id` | `name_id` |
	  | Israel | ישראל | `fclass_il` | `name_he` |
	  | Italy | Italia | `fclass_it` | `name_it` |
	  | Japan | 日本 | `fclass_jp` | `name_ja` |
	  | Morocco | المغرب | `fclass_ma` | `name_ar` |
	  | Nepal | नेपाल | `fclass_np` | `name` |
	  | Netherlands | Nederland | `fclass_nl` | `name_nl` |
	  | Pakistan | پاکستان | `fclass_pk` | `name_ur` |
	  | Palestine | فلسطين | `fclass_ps` | `name_ar` |
	  | Poland | Polska | `fclass_pl` | `name_pl` |
	  | Portugal | Portugal | `fclass_pt` | `name_pt` |
	  | Russia | Россия | `fclass_ru` | `name_ru` |
	  | Saudi Arabia | المملكة العربية السعودية |`fclass_sa` | `name_ar` |
	  | South Korea | 한국 | `fclass_ko` | `name_ko` |
	  | Spain | España | `fclass_es` | `name_es` |
	  | Sweden | Sverige | `fclass_se` | `name_sv` |
	  | Taiwan | 中華民國 | `fclass_tw` | `name_zht` |
	  | Turkey | Türkiye | `fclass_tr` | `name_tr` |
	  | Ukraine | Україна | `fclass_ua` | `name_uk` |
	  | United Kingdom | United Kingdom | `fclass_gb` | `name_en` |
	  | United States | United States | `fclass_us` | `name_en` |
	  | Vietnam | Việt Nam | `fclass_vn` | `name_vi` |
	  | ISO* | ISO | `fclass_iso` | `name_en` or `name_fr`|
	  
	  _`*`: NOTE: ISO stands for the International Organization for Standards._
	- ## Setting Country Polygon POV
	  
	  Alternate point-of-views for `ne_10m_admin_0_countries` theme are available preassembled
	  for 31 different viewpoints (eg `fclass_*`), in the format `ne_10m_admin_0_countries_*`
	  where `*` is the Natural Earth alpha-3 code (since version 5). These are helpful for
	  building choropleth maps – though be aware the population, area, and other statitics are
	  for the defacto shape not the POV shape. If the country is a liberal democracy, then the
	  defacto status might be shown instead of official policy (eg Spain and Gibralter), But
	  when a country has a strict legal policy around showing it's own or another countries
	  boundaries that is followed. For example: Argentina is `ne_10m_admin_0_countries_arg`.
	  
	  _NOTE: These variants are NOT included in the QGIS package, you must download them from
	  the website and add them to the QGIS project manually._
	  
	  The following country and international organizations worldviews are supported:
	  
	  | Country | Native name | NE alpha-3 code* | NE alpha-2 code* | Recommended name pairing |
	  |---------|-------------|-----------------|------------------|--------------------------|
	  | Argentina | Argentina | `arg` | ar | `name_es` |
	  | Bangladesh | বাংলাদেশ | `bdg` | bd | `name_bn` |
	  | Brazil | Brasil | `bra` | br | `name_pt` |
	  | China | 中国 | `chn` | cn | `name_zhs` |
	  | Germany | Deutschland | `deu` | de | `name_de` |
	  | Egypt | مصر | `egy` | eg | `name_ar` |
	  | Spain | España | `esp` | es | `name_es` |
	  | France | France | `fra` | fr | `name_fr` |
	  | United Kingdom | United Kingdom | `gbr` | gb | `name_en` |
	  | Greece | Ελλάς | `grc` | gr | `name_el` |
	  | Indonesia | Indonesia | `idn` | id | `name_id` |
	  | India | भारत | `ind` | in | `name_hi` |
	  | Israel | ישראל | `isl` | il | `name_he` |
	  | Italy | Italia | `ita` | it | `name_it` |
	  | Japan | 日本 | `jpn` | jp | `name_ja` |
	  | South Korea | 한국 | `kor` | ko | `name_ko` |
	  | Morocco | المغرب | `mar` | ma | `name_ar` |
	  | Nepal | नेपाल | `nep` | np  | `name` |
	  | Netherlands | Nederland | `nld` | nl | `name_nl` |
	  | Pakistan | پاکستان | `pak` | pk | `name_ur` |
	  | Poland | Polska | `pol` | pl | `name_pl` |
	  | Portugal | Portugal | `prt` | pt | `name_pt` |
	  | Palestine | فلسطين | `pse` | ps | `name_ar` |
	  | Russia | Россия | `rus` | ru | `name_ru` |
	  | Saudi Arabia | المملكة العربية السعودية | `sau` | sa | `name_ar` |
	  | Sweden | Sverige | `swe` | se | `name_sv` |
	  | Turkey | Türkiye | `tur` | tr | `name_tr` |
	  | Taiwan | 中華民國 | `twn` | tw | `name_zht` |
	  | Ukraine | Україна | `ukr` | ua | `name_uk` |
	  | United States | United States | `usa` | us | `name_en` |
	  | Vietnam | Việt Nam | `vnm` | vn | `name_vi` |
	  | ISO** | ISO | `iso` | n/a | `name_en` or `name_fr`|
	  
	  _`*` NOTE: In most but not all cases the Natural Earth alpha-3 and alpha-2 codes are the
	  same as ISO alpha-3 and alpha-2 codes._
	  
	  _`**`: NOTE: ISO stands for the International Organization for Standards._