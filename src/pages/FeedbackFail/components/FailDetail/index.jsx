import * as React from 'react';
import { Button, Message, Card } from '@alifd/next';
import styles from './index.module.css';

export default function FailDetail(props) {
  const {
    statusCode = '提交失败',
    description = '请核对并修改信息后，再重新提交。',
    image = 'https://img.alicdn.com/tfs/TB1VOSVoqL7gK0jSZFBXXXZZpXa-72-72.png',
    buttonBackDesc = '返回修改',
    onButtonBack = null,
  } = props;

  const gobackHandle = () => {
    if (onButtonBack) {
      onButtonBack();
    } else {
      Message.notice('返回修改');
    }
  };

  return (
    <Card free className={styles.failDetail}>
      <div>
        <img src={image} className={styles.exceptionImage} alt="img" />
        <h1 className={styles.statusCode}>{statusCode}</h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.operationWrap}>
          <Button type="primary" onClick={gobackHandle} className={styles.mainAction}>
            {buttonBackDesc}
          </Button>
        </div>
      </div>
    </Card>
  );
}
