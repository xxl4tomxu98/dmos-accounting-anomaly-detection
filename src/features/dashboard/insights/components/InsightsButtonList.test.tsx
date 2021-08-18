import { fireEvent, screen } from '@testing-library/dom';
import { render } from 'src/test-utils';
import { INSIGHTS_BUTTON_LIST_ITEM_DATA } from '../../constants/button-list-data';
import { InsightsContentTypes } from '../../enums/content-types';
import { InsightsButtonList } from './InsightsButtonList';

const fn = jest.fn();
function setup(fn: (chart: InsightsContentTypes) => void): void {
  render(<InsightsButtonList setContentTypeFn={fn} />);
}
describe('Insights Button List Tests', () => {
  it('Button list labeling and events fire', () => {
    setup(fn);
    const listButtons = screen.getAllByRole('button');
    listButtons.forEach((button, index) => {
      expect(button).toHaveTextContent(
        INSIGHTS_BUTTON_LIST_ITEM_DATA[index]!.label,
      );
      fireEvent.click(button);
      expect(fn).toBeCalled();
    });
  });
});

export {};
