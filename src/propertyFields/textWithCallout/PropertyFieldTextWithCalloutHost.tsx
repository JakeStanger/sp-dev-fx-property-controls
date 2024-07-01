import * as React from 'react';

import PropertyFieldHeader from '../../common/propertyFieldHeader/PropertyFieldHeader';

import { IPropertyFieldTextWithCalloutHostProps } from './IPropertyFieldTextWithCalloutHost';
import * as telemetry from '../../common/telemetry';
import { TextField } from '@fluentui/react/lib/components/TextField';
import omit from 'lodash/omit';

export default class PropertyFieldTextWithCalloutHost extends React.Component<IPropertyFieldTextWithCalloutHostProps, null> {
  constructor(props: IPropertyFieldTextWithCalloutHostProps) {
    super(props);

    telemetry.track('PropertyFieldTextWithCallout', {
      disabled: props.disabled
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <PropertyFieldHeader {...this.props} />
        <TextField {...omit(this.props, ['label'])} onChange={(event, newValue: string) => {
          if (this.props.onChanged) {
            this.props.onChanged(newValue);
          }
        }} />
      </div>
    );
  }
}
