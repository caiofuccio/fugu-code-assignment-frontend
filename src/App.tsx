import React, { useState } from 'react';
import styles from './styles.module.scss';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { SummaryInterface } from './interface/SummaryInterface';
import Text from './components/Text';
import { EmailAnalyzerService } from './services/EmailAnalyzerService';

function App() {
    const [mailText, setMailText] = useState<string>('');
    const [summaryData, setSummaryData] = useState<SummaryInterface>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const inputTitle = 'Message';
    const inputPlaceholder = 'Type your message here';
    const buttonTitle = 'Summarize';

    const sendMessage = async () => {
        try {
            const emailAnalysis = await EmailAnalyzerService.getEmailSentiment(mailText);
            setSummaryData(emailAnalysis);
        } catch (error) {
            setErrorMessage('Unable to summarize Email');
        }
    };

    return (
        <div className={styles['container']}>
            <Card>
                <h1>EMAIL SUMMARIZER</h1>
                <Input
                    title={inputTitle}
                    placeholder={inputPlaceholder}
                    text={mailText}
                    onChange={e => setMailText(e.target.value)}
                />
                <Button title={buttonTitle} onClick={sendMessage} />
                <div>
                    {summaryData && (
                        <div>
                            <Text label="Summary" text={summaryData.summary} />
                            <Text label="Sentiment" text={summaryData.sentiment} />
                            <Text
                                label="Awaiting Response?"
                                text={summaryData.awaitingResponse ? 'yes' : 'no'}
                            />
                        </div>
                    )}
                </div>
                {errorMessage && <p>{errorMessage}</p>}
            </Card>
        </div>
    );
}

export default App;
