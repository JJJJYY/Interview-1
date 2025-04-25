"use client";
import './home.css'
import React,{useState} from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ mobile: '', code: '' });
  const [formErrors, setFormErrors] = useState({ mobile: '', code: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'mobile') {
      if (value.trim() === '') {
        setFormErrors({ ...formErrors, mobile: '请输入手机号' });
      } else {
        setFormErrors({ ...formErrors, mobile: '' });
      }
    } else if (name === 'code') {
      if (value.trim() === '') {
        setFormErrors({ ...formErrors, code: '请输入验证码' });
      } else {
        setFormErrors({ ...formErrors, code: '' });
      }
    }
  };

  const handleGetCode = () => {
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mobile.trim() === '') {
      setFormErrors({ ...formErrors, mobile: '请输入手机号' });
      return;
    }
    if (formData.code.trim() === '') {
      setFormErrors({ ...formErrors, code: '请输入验证码' });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      console.log('表单数据', formData);
      setSubmitting(false);
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <input
          placeholder="手机号"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {formErrors.mobile && <p className="form-error">{formErrors.mobile}</p>}
      </div>

      <div className="form-item">
        <div className="input-group">
          <input
            placeholder="验证码"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
          />
          <button className="getcode" onClick={handleGetCode} disabled={formData.mobile.trim() === ''}>
            获取验证码
          </button>
        </div>
        {formErrors.code && <p className="form-error">{formErrors.code}</p>}
      </div>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'submiting......' : '登录'}
      </button>
    </form>
  );
}
