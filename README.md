# Stock Market Watcher ###

A Stock Market application built with [Meteor](https://www.meteor.com/) utilizing the [Yahoo Finance API](http://finance.yahoo.com/)

Built to test and explore Meteor with information from various web sources.


## Features
* Auto-refresh every 10sec
* Historical quote data (chart)
* Filter trending quotes

![Screenshot](public/screenshot.png)

## Packages
```
meteor remove insecure
meteor remove autopublish

meteor add twbs:bootstrap
meteor add ajbarry:yahoo-finance
meteor add reactive-var
meteor add jhuenges:highstock
meteor add accounts-ui accounts-password
```
### License
[The MIT License](LICENSE.md)
