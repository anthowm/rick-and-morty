import { useIntl } from 'react-intl';

export const useTranslation = () => {
    const intl = useIntl();
    return intl.formatMessage;
};
