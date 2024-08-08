import { SummaryInterface } from '../interface/SummaryInterface';

export class EmailAnalyzerService {
    static async getEmailSentiment(email: string): Promise<SummaryInterface> {
        const url = `${process.env.REACT_APP_API_URL}/analyze-email`;
        const authToken = process.env.REACT_APP_API_AUTH_TOKEN || '';
        const body = { emailText: email };

        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                authorization: authToken,
                'Access-Control-Allow-Origin':
                    'https://caiofuccio.github.io/fugu-code-assignment-frontend',
            },
        }).then(response => {
            if (!response.ok) throw new Error(`Unable to connect to the server`);

            return response.json();
        });
    }
}
