import * as React from 'react';
import PropertyFieldHeader from '../../common/propertyFieldHeader/PropertyFieldHeader';
import type { IPropertyFieldHeaderProps } from '../../common/propertyFieldHeader/IPropertyFieldHeader';

import { IPropertyFieldDropdownWithCalloutHostProps } from './IPropertyFieldDropdownWithCalloutHost';
import * as telemetry from '../../common/telemetry';
import { Dropdown, IDropdownProps, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { IPropertyPaneDropdownOption } from '@microsoft/sp-property-pane';
import { SelectableOptionMenuItemType } from '@fluentui/react/lib/SelectableOption';
import omit from 'lodash/omit';

export default class PropertyFieldDropdownHost extends React.Component<IPropertyFieldDropdownWithCalloutHostProps, null> {
    constructor(props: IPropertyFieldDropdownWithCalloutHostProps) {
      super(props);

      telemetry.track('PropertyFieldDropdown', {
        disabled: props.disabled
      });
    }

    public render(): JSX.Element {
      const dropdownProps: IDropdownProps = omit(this.props, ['label']);
      dropdownProps.options = this._convertPropPaneOptionsToDropdownOptions(dropdownProps.options);
        return (
            <div>
                <PropertyFieldHeader {...(this.props as IPropertyFieldHeaderProps)} />
                <Dropdown {...dropdownProps} />
            </div>
        );
    }

    private _convertPropPaneOptionsToDropdownOptions(propPaneOptions: IPropertyPaneDropdownOption[]): IDropdownOption[] {
      return propPaneOptions.map<IDropdownOption>(propPaneOption => {
        return {
          key: propPaneOption.key,
          text: propPaneOption.text,
          index: propPaneOption.index,
          itemType: SelectableOptionMenuItemType[SelectableOptionMenuItemType[propPaneOption.type]]
        };
      });
    }
}
