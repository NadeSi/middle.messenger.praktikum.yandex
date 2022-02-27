import {expect} from 'chai';
import sinon from 'sinon';

import {HttpService} from './http.service';
import {CallMethodType, IHttpOptions} from './http.helper';

describe('HttpService', () => {
  let http: HttpService;
  const options: IHttpOptions = {
    headers: {header: 'test'},
    data: {data: 'test'},
  };

  before(() => {
    http = new HttpService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('GET case-positive', () => {
    const requestSpy = sinon.spy(http, 'request');
    http.get('/test', options);

    expect(requestSpy.calledOnceWith('/test?data=test', {...options, method: <CallMethodType>'GET'})).to.equal(true);
  });

  it('GET case-negative', () => {
    const requestSpy = sinon.spy(http, 'request');
    http.get('/test', options);

    expect(requestSpy.calledOnceWith('/test', {...options, method: <CallMethodType>'GET'})).to.equal(false);
    expect(requestSpy.calledOnceWith('/test?data=test', {...options})).to.equal(false);
  });

  it('POST case-positive', () => {
    const requestSpy = sinon.spy(http, 'request');
    http.post('/test', options);

    expect(requestSpy.calledOnceWith('/test', {...options, method: <CallMethodType>'POST'})).to.equal(true);
  });

  it('PUT case-positive', () => {
    const requestSpy = sinon.spy(http, 'request');
    http.put('/test', options);

    expect(requestSpy.calledOnceWith('/test', {...options, method: <CallMethodType>'PUT'})).to.equal(true);
  });

  it('DELETE case-positive', () => {
    const requestSpy = sinon.spy(http, 'request');
    http.delete('/test', options);

    expect(requestSpy.calledOnceWith('/test', {...options, method: <CallMethodType>'DELETE'})).to.equal(true);
  });
});
