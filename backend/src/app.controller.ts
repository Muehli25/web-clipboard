import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {AppService} from './app.service';
import {Transfer} from './model/transfer.dto';

@Controller("api")
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getClipboard(@Query('token') token): Transfer {
        return this.appService.getClipboard(parseInt(token));
    }

    @Post()
    setClipboard(@Body() transferDto: Transfer): Transfer {
        return this.appService.setClipboard(transferDto.clipboard);
    }
}
