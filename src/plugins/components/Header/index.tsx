import {
  paddingCss,
  paddingCssSchema,
  marginCss,
  marginCssSchema,
  fontCss,
  fontCssSchema,
  transformStyle
} from '@/views/editor';
import style from './index.module.scss';

export const Header = ({ text, ...oth }) => {
  console.info(oth, '----')
  return (
    <div
      className={style.wrapper}
      style={{...oth}}
    >
      <img src="/common/close.png" alt="close" />
      <span>{text}</span>
    </div>
  );
};

Header.defaultProps = {
  text: '文字',
  bgcolor: '#fa0',
  height: 48,
  fontSize: 16,
  color: '#fff',
};

(Header as any).schema = {
  text: {
    title: '文字',
    type: 'text'
  },
  bgcolor: {
    title: '背景色',
    type: 'color'
  },
  height: {
    title: '组件高度',
    type: 'number',
  },
  fontSize: {
    title: '字体大小',
    type: 'number'
  },
  color: {
    title: '字体颜色',
    type: 'color'
  }
}
