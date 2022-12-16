import React from 'react';
import {request} from 'ice';

export default {
  async login(params) {
    const res = await request.post('/api/auth/login', params);
    return res;
  }
}