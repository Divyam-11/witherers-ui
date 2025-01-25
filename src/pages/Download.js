import React from 'react';
import styles from '../styles/Download.module.css';

const Download = () => {
    return (
        <div id="download" className={styles.download}>
            <h1>Download Minecraft Worlds</h1>
            <p className={styles.subtitle}>
                Relive the adventures of the Witherers crew! Download the worlds we’ve played or hosted and explore them for yourself.
            </p>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>World Name</th>
                            <th>Description</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>World 1</td>
                            <td>A survival world where we built our first base and explored vast landscapes.</td>
                            <td><a href="path/to/world1.zip" className={styles.downloadLink} download>Download</a></td>
                        </tr>
                        <tr>
                            <td>World 2</td>
                            <td>An adventure map we hosted for a weekend of challenges and fun.</td>
                            <td><a href="path/to/world2.zip" className={styles.downloadLink} download>Download</a></td>
                        </tr>
                        <tr>
                            <td>World 3</td>
                            <td>A creative world where we collaborated on massive builds and projects.</td>
                            <td><a href="path/to/world3.zip" className={styles.downloadLink} download>Download</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Download;