var parser = require('rss-parser');
var fs = require('fs');

var url = ['https://www.reddit.com/.rss',
            'http://fakty.ua/rss_feed/ukraina/',
            'https://www.liteforex.ru/rss/all-updates/',
            'https://www.liteforex.ru/rss/company-news/',
            'https://www.liteforex.ru/rss/analytics/',
            'https://www.liteforex.ru/rss/forex-articles/',
            'http://fakty.ua/rss_feed/ukraina',
            'http://fakty.ua/rss_feed/world',
            'http://fakty.ua/rss_feed/politics',
            'http://fakty.ua/rss_feed/crime',
            'http://fakty.ua/rss_feed/health',
            'http://fakty.ua/rss_feed/sport',
            'http://fakty.ua/rss_feed/culture',
            'http://fakty.ua/rss_feed/stories',
            'http://fakty.ua/rss_feed/life-stories',
            'http://fakty.ua/rss_feed/science',
            'http://fakty.ua/rss_feed/all',
            'http://fakty.ua/rss_feed/money',
            'http://feeds.feedburner.com/yedok/lukkul',
            'http://feeds2.feedburner.com/prosat/cable',
            'http://feeds2.feedburner.com/un373',
            'http://ungheni.blog.ru/rss',
            'http://feeds2.feedburner.com/gamovicwordpress',
            'http://seosfera.livejournal.com/data/rss',
            'http://mublog.ru/rss.php?blogId=2&profile=rss20',
            'http://mublog.ru/rss.php?summary=1',
            'http://blog.ungheni.ru/rss.php?summary=1&type=pos..',
            'http://feeds.feedburner.com/businesssuccess/rss',
            'http://feeds.dnevnik-mamochki.info/dnevnik-mamochki-rss',
            'http://feeds.feedburner.com/probiznes',
            'http://varmeniyu.ru/ru/rssfeed.rss',
            'http://feeds.feedburner.com/Ruboard-SMI',
            'http://time-news.net/rss.xml',
            'http://vipstav.ru/rss.xml',
            'http://news-vendor.com/rss.xml',
            'http://rostec.ru/rss_yandex',
            'http://slawyanka.info/feed',
            'http://fishnews.ru/rss_full',
            'http://mygazeta.com/feed'/*,
            'http://rss.garant.ru/consult/budget/',
            'http://rss.garant.ru/consult/gpurchase/',
            'http://rss.garant.ru/consult/work_law/',
            'http://rss.garant.ru/consult/civil_law/',
            'http://rss.garant.ru/consult/nalog/',
            'http://rss.garant.ru/consult/account/',
            'http://rss.garant.ru/ia/research/',
            'http://rss.garant.ru/ia/opinion/',
            'http://rss.garant.ru/interview/',
            'http://rss.garant.ru/article/',
            'http://rss.garant.ru/news/',
            'http://rss.garant.ru/infografika/',
            'http://rss.garant.ru/hotlaw/minfin/',
            'http://rss.garant.ru/hotlaw/kyrov/',
            'http://rss.garant.ru/hotlaw/kemerovo/',
            'http://rss.garant.ru/hotlaw/karachaevo/',
            'http://rss.garant.ru/hotlaw/kamchat/',
            'http://rss.garant.ru/hotlaw/kaluga/',
            'http://rss.garant.ru/hotlaw/kalmyk/',
            'http://rss.garant.ru/hotlaw/kaliningrad/',
            'http://rss.garant.ru/hotlaw/kabardin/',
            'http://rss.garant.ru/hotlaw/irkutsk/',
            'http://rss.garant.ru/hotlaw/ingush/',
            'http://rss.garant.ru/hotlaw/ivanovo/',
            'http://rss.garant.ru/hotlaw/chita/',
            'http://rss.garant.ru/hotlaw/evrei/',
            'http://rss.garant.ru/hotlaw/voronezh/',
            'http://rss.garant.ru/hotlaw/vologod/',
            'http://rss.garant.ru/hotlaw/volga/',
            'http://rss.garant.ru/hotlaw/vladimir/',
            'http://rss.garant.ru/hotlaw/buryat/',
            'http://rss.garant.ru/hotlaw/briansk/',
            'http://rss.garant.ru/hotlaw/belgorod/',
            'http://rss.garant.ru/hotlaw/bashkor/',
            'http://rss.garant.ru/hotlaw/astra/',
            'http://rss.garant.ru/hotlaw/arhangelsk/',
            'http://rss.garant.ru/hotlaw/amur/',
            'http://rss.garant.ru/hotlaw/altai/',
            'http://rss.garant.ru/hotlaw/adygeia/',
            'http://rss.garant.ru/hotlaw/peter/',
            'http://rss.garant.ru/hotlaw/moscow/',
            'http://rss.garant.ru/hotlaw/federal/',
            'http://rss.garant.ru/hotlaw/kostroma/',
            'http://rss.garant.ru/hotlaw/krasnodar/',
            'http://rss.garant.ru/hotlaw/krasnoiarsk/',
            'http://rss.garant.ru/hotlaw/kurgan/',
            'http://rss.garant.ru/hotlaw/kursk/',
            'http://rss.garant.ru/hotlaw/magadan/',
            'http://rss.garant.ru/hotlaw/mariel/',
            'http://rss.garant.ru/hotlaw/mordovia/',
            'http://rss.garant.ru/hotlaw/mos_obl/',
            'http://rss.garant.ru/hotlaw/murmansk/',
            'http://rss.garant.ru/hotlaw/nenecky/',
            'http://rss.garant.ru/hotlaw/novg/',
            'http://rss.garant.ru/hotlaw/novgorobl/',
            'http://rss.garant.ru/hotlaw/novosibirsk/',
            'http://rss.garant.ru/hotlaw/omsk/',
            'http://rss.garant.ru/hotlaw/orenburg/',
            'http://rss.garant.ru/hotlaw/orel/',
            'http://rss.garant.ru/hotlaw/penza/',
            'http://rss.garant.ru/hotlaw/perm/',
            'http://rss.garant.ru/hotlaw/primor/',
            'http://rss.garant.ru/hotlaw/pskov/',
            'http://rss.garant.ru/hotlaw/altay/',
            'http://rss.garant.ru/hotlaw/dagistan/',
            'http://rss.garant.ru/hotlaw/karelia/',
            'http://rss.garant.ru/hotlaw/komi/',
            'http://rss.garant.ru/hotlaw/crimea/',
            'http://rss.garant.ru/hotlaw/tyva/',
            'http://rss.garant.ru/hotlaw/rostov/',
            'http://rss.garant.ru/hotlaw/ryazan/',
            'http://rss.garant.ru/hotlaw/samara/',
            'http://rss.garant.ru/hotlaw/saratov/',
            'http://rss.garant.ru/hotlaw/yakut/',
            'http://rss.garant.ru/hotlaw/sahalin/',
            'http://rss.garant.ru/hotlaw/sverdlovsk/',
            'http://rss.garant.ru//hotlaw/sevastopol/',
            'http://rss.garant.ru/hotlaw/osetia/',
            'http://rss.garant.ru/hotlaw/smolensk/',
            'http://rss.garant.ru/hotlaw/stav_real/',
            'http://rss.garant.ru/hotlaw/tambov/',
            'http://rss.garant.ru/hotlaw/tambov/',
            'http://rss.garant.ru/hotlaw/tver/',
            'http://rss.garant.ru/hotlaw/tomsk/',
            'http://rss.garant.ru/hotlaw/tula/',
            'http://rss.garant.ru/hotlaw/tumen/',
            'http://rss.garant.ru/hotlaw/udmurtia/',
            'http://rss.garant.ru/hotlaw/ulyanovsk/',
            'http://rss.garant.ru/hotlaw/xabar/',
            'http://rss.garant.ru/hotlaw/hakas/',
            'http://rss.garant.ru/hotlaw/hant/',
            'http://rss.garant.ru/hotlaw/chelyabinsk/',
            'http://rss.garant.ru/hotlaw/chechnya/',
            'http://rss.garant.ru/hotlaw/chuvashia/',
            'http://rss.garant.ru/hotlaw/yamalonenecky/',
            'http://rss.garant.ru/hotlaw/yaroslavl/'*/
          ];
          var count = 1793;
          var arr_news = [];
          var elasticsearch = require('elasticsearch');
          var client = new elasticsearch.Client({
            host: 'localhost:9200',
            log: 'trace'
          });
          for (var i = 0; i<url.length; i++){
            parser.parseURL(url[i], function(err, parsed) {
              if (err) {
                console.log('err');

              } else {

            parsed.feed.entries.forEach(function(entry) {
            //  console.log(entry);
              var obj = { title: null,
                          link: null,
                          author: null,
                          pubDate:null,
                          guid: null,
                          categories: null,
            }
              count ++;
              console.log(entry);
              obj.title = entry.title;
              obj.link = entry.link;
              obj.author = entry.author;
              obj.pubDate = entry.pubDate;
              obj.guid = entry.guid;
              obj.categories = entry.categories;
              arr_news.push(obj);
              client.index({
                index: 'news',
                type: 'article',
                id: count,
                body: entry
            }, function (error, response) {
              console.log(response);
              console.log(error);
            });
              fs.appendFileSync(count+'azaza'+'.json', JSON.stringify(entry),'utf8');
            })}
          })
      }
      console.log('FINISH' + ' count = '+ count);
