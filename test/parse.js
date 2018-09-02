'use strict';

const chai = require('chai');
chai.should();

const parse = require('../').parse;

describe('parse', function(){
  it('connection string', function() {
    var subject = parse('mysql://root:pw@hostname:3307/dbname?encoding=utf8');
    subject.user.should.equal('root');
    subject.password.should.equal('pw');
    subject.host.should.equal('hostname');
    subject.port.should.equal('3307');
    subject.database.should.equal('dbname');
    subject.encoding.should.equal('utf8');
  });
});
