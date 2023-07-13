import React from 'react';
import {PureComponent, ReactNode} from 'react';
import {Text as RNText} from 'react-native';

import H1 from 'viamagnus/src/components/Text/H1';
import H2 from 'viamagnus/src/components/Text/H2';
import H3 from 'viamagnus/src/components/Text/H3';
import H4 from 'viamagnus/src/components/Text/H4';

class Text extends PureComponent<{children: ReactNode}> {
  static H1 = H1;
  static H2 = H2;
  static H3 = H3;
  static H4 = H4;

  render(): ReactNode {
    const {children} = this.props;

    return <RNText>{children}</RNText>;
  }
}

export default Text;
