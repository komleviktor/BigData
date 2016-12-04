var parser = require('rss-parser');
var fs = require('fs');

var url = [
            'http://rss.garant.ru/hotlaw/irkutsk/'

          ];
          var count = 0;
          var arr_news = [];
          for (var i = 0; i<url.length; i++){
            parser.parseURL(url[i], function(err, parsed) {
            parsed.feed.entries.forEach(function(entry) {
            console.log(entry);
              var obj = { title: null,
                          link: null,
                          author: null,
                          pubDate:null,
                          guid: null,
                          categories: null,
            }
              count ++;
              console.log( ' count = '+ count);
              obj.title = entry.title;
              obj.link = entry.link;
              obj.author = entry.author;
              obj.pubDate = entry.pubDate;
              obj.guid = entry.guid;
              obj.categories = entry.categories;
              arr_news.push(obj);
              fs.appendFileSync('rezult.txt', JSON.stringify(obj),'utf8');
            })
          })
      }
      console.log('FINISH' + ' count = '+ count);
