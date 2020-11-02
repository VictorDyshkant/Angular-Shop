import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    private readonly characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    generate(charactersLength: number): string {
        let result = '';

        for (let i = 0; i < charactersLength; i++) {
            const index = this.randomInteger(0, this.characters.length - 1);
            result += this.characters.charAt(index);
        }

        return result;
    }

    randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
