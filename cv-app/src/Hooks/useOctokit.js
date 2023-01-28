import { useState, useEffect } from 'react';
import { octokit } from '../API/Octokit';

export default function useOctokit(path) {
    const [code, setCode] = useState(null);

    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                `GET /repos/{owner}/{repo}/contents/{path}`, {
                owner: 'ekaramyan',
                repo: 'components',
                path: `src/lib/components/${path}`
            })
                .then(res => console.log(res)
                ).catch(err => console.log(err));
        }
        onLoad();
    }, [])
    return {
        code
    }
};