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
            'http://mygazeta.com/feed'
          ];
          var count = 0;
          var arr_news = [];
          for (var i = 0; i<url.length; i++){
          //  console.log('++++++++ INDEX +++++++ ',i);
            parser.parseURL(url[34], function(err, parsed) {
          //  console.log(parsed.feed.title);
            parsed.feed.entries.forEach(function(entry) {
              var obj = { title: null,
                          link: null,
                          author: null,
                          pubDate:null,
                          guid: null,
                          categories: null,
            }
              count ++;
              obj.title = entry.title;
              obj.link = entry.link;
              obj.author = entry.author;
              obj.pubDate = entry.pubDate;
              obj.guid = entry.guid;
              obj.categories = entry.categories;
              //console.log('entry.title :', entry.title);
        //      console.log('entry.link :', entry.link);
            //  console.log('entry.au :', entry.author);
      //        console.log('pubDate :', entry.pubDate);
  //            console.log('entry.guid :', entry.guid);
      //        console.log('entry.categories :', entry.categories);
      //        console.log ('count' ,count);
        //      console.log('===========================================');
              arr_news.push(obj);

                fs.writeFileSync('test.txt', JSON.stringify( arr_news));
                console.log('dgfdsssssg',arr_news.length);
          })

          })

      }
